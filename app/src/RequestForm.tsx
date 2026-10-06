"use client";

import { FormEvent, useState } from "react";
import { Button, Icon } from "./App";
type InputFieldProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function InputField({ label, required, ...props }: InputFieldProps) {
  return (
    <label className="field">
      <span>
        {label}
        {required && <b>*</b>}
      </span>
      <input required={required} {...props} />
    </label>
  );
}
export default function RequestForm() {
  const [selected, setSelected] = useState<string[]>(["Lighting"]);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");

    const fd = new FormData(event.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "");
    const payload = {
      name: get("name"),
      company: get("company"),
      phone: get("phone"),
      email: get("email"),
      location: get("location"),
      propertyType: get("propertyType"),
      services: selected,
      stage: get("stage"),
      timeline: get("timeline"),
      budget: get("budget"),
      details: get("details"),
      contactMethod: get("contactMethod") || "WhatsApp",
      consent: fd.get("consent") === "on",
      website: get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok)
        throw new Error(json.error ?? "Something went wrong.");
      setReference(json.reference);
      setStatus("success");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (status === "success")
    return (
      <div className="form-card success-state">
        <span className="success-icon">
          <Icon name="check" size={34} />
        </span>
        <h3>Request received</h3>
        <strong className="reference">REFERENCE · {reference}</strong>
        <p>
          Thank you. We will contact you within 24 business hours to review your
          requirements.
        </p>
        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            setStatus("idle");
            setSelected(["Lighting"]);
          }}
        >
          Submit another request
        </Button>
      </div>
    );

  return (
    <form className="form-card" onSubmit={submit}>
      {/* Honeypot: hidden from people, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp"
      />

      <div className="form-row">
        <InputField
          name="name"
          label="Full name"
          required
          placeholder="Your full name"
        />
        <InputField
          name="company"
          label="Company / organization"
          placeholder="Optional"
        />
      </div>
      <div className="form-row">
        <InputField
          name="phone"
          label="Phone number"
          type="tel"
          required
          placeholder="+20 1XX XXX XXXX"
        />
        <InputField
          name="email"
          label="Email address"
          type="email"
          required
          placeholder="name@company.com"
        />
      </div>
      <div className="form-row">
        <InputField
          name="location"
          label="Project location"
          placeholder="City"
        />
        <label className="field">
          <span>
            Property type<b>*</b>
          </span>
          <select name="propertyType" required defaultValue="">
            <option value="" disabled>
              Select property type
            </option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Office</option>
            <option>Hotel</option>
            <option>Commercial building</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <fieldset className="field">
        <legend>Services required</legend>
        <div className="service-chips">
          {[
            "Lighting",
            "Security",
            "Climate",
            "Access",
            "Energy",
            "Custom IoT",
          ].map((item) => (
            <button
              type="button"
              className={selected.includes(item) ? "selected" : ""}
              onClick={() =>
                setSelected(
                  selected.includes(item)
                    ? selected.filter((x) => x !== item)
                    : [...selected, item],
                )
              }
              key={item}
            >
              {selected.includes(item) && <Icon name="check" size={14} />}
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="form-row">
        <label className="field">
          <span>Project stage</span>
          <select name="stage" defaultValue="">
            <option value="" disabled>
              Select stage
            </option>
            <option>Planning</option>
            <option>Under construction</option>
            <option>Existing property</option>
          </select>
        </label>
        <label className="field">
          <span>Estimated timeline</span>
          <select name="timeline" defaultValue="">
            <option value="" disabled>
              Select timeline
            </option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>6+ months</option>
          </select>
        </label>
      </div>

      <label className="field">
        <span>Approximate budget</span>
        <select name="budget" defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          <option>Under EGP 100K</option>
          <option>EGP 100K–250K</option>
          <option>EGP 250K–500K</option>
          <option>EGP 500K–1M</option>
          <option>EGP 1M+</option>
        </select>
      </label>

      <label className="field">
        <span>Project details</span>
        <textarea
          name="details"
          placeholder="Please describe the property, required systems and relevant programme information."
          rows={4}
        />
      </label>

      <fieldset className="field contact-method">
        <legend>Preferred contact method</legend>
        <div>
          {["Phone", "WhatsApp", "Email"].map((item, i) => (
            <label key={item}>
              <input
                type="radio"
                name="contactMethod"
                value={item}
                defaultChecked={i === 1}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          <i>
            <Icon name="check" size={13} />
          </i>
          I agree to be contacted regarding this request and accept the privacy
          policy.
        </span>
      </label>

      {status === "error" && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <span className="spinner" /> Submitting request…
          </>
        ) : (
          <>
            Submit request <Icon name="arrow" />
          </>
        )}
      </Button>
    </form>
  );
}
