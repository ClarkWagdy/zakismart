import { NextResponse } from "next/server";
import { Resend } from "resend";
import { randomInt } from "node:crypto";
import { z } from "zod";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO ?? "info@zakismart.com";
const FROM = process.env.CONTACT_FROM ?? "Zaki Website <noreply@zakismart.com>";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).default(""),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(120),
  location: z.string().trim().max(100).default(""),
  propertyType: z.string().trim().min(1).max(60),
  services: z.array(z.string().trim().max(40)).max(10).default([]),
  stage: z.string().trim().max(60).default(""),
  timeline: z.string().trim().max(60).default(""),
  budget: z.string().trim().max(60).default(""),
  details: z.string().trim().max(2000).default(""),
  contactMethod: z.enum(["Phone", "WhatsApp", "Email"]).default("WhatsApp"),
  consent: z.literal(true),
});

const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );

const makeReference = () =>
  `ZK-${new Date().getFullYear()}-${randomInt(10000, 99999)}`;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (
    typeof (body as any)?.website === "string" &&
    (body as any).website.length > 0
  ) {
    return NextResponse.json({ ok: true, reference: makeReference() });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the required fields and try again." },
      { status: 400 },
    );
  }
  const d = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is missing");
    return NextResponse.json(
      { ok: false, error: "Server is not configured." },
      { status: 500 },
    );
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  const reference = makeReference();
  const rows: [string, string][] = [
    ["Reference", reference],
    ["Name", d.name],
    ["Company", d.company],
    ["Phone", d.phone],
    ["Email", d.email],
    ["Location", d.location],
    ["Property type", d.propertyType],
    ["Services", d.services.join(", ")],
    ["Project stage", d.stage],
    ["Timeline", d.timeline],
    ["Budget", d.budget],
    ["Preferred contact", d.contactMethod],
    ["Details", d.details],
  ];

  const html = `
  <div style="font-family:Arial,sans-serif;max-width:620px">
    <h2 style="color:#1B1B2F;margin:0 0 12px">New project request ${esc(reference)}</h2>
    <table style="width:100%;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) => `<tr>
        <td style="padding:8px;border-bottom:1px solid #eee;color:#666;width:170px;vertical-align:top">${esc(k)}</td>
        <td style="padding:8px;border-bottom:1px solid #eee;color:#1B1B2F">${esc(v || "-").replace(/\n/g, "<br>")}</td>
      </tr>`,
        )
        .join("")}
    </table>
  </div>`;
  const text = rows.map(([k, v]) => `${k}: ${v || "-"}`).join("\n");
console.log("Sending from:", FROM, "to:", TO);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: d.email, // hitting "Reply" answers the customer
    subject: `New request ${reference}: ${d.name} (${d.propertyType})`.replace(
      /[\r\n]+/g,
      " ",
    ),
    html,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your request. Please try again or email info@zakismart.com.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, reference });
}
