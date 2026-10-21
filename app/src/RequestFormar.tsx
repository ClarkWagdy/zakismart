"use client";

import { FormEvent, useState } from "react";
 type InputFieldProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
import { Button, Icon } from "./App";
import { useL, useLang } from "./lang";
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

// Each option is [value sent to the API (always English), label shown to the user]
type Opt = [string, string];

export default function RequestFormar() {
  const L = useL();
  const ar = useLang() === "ar";

  const [selected, setSelected] = useState<string[]>(["Lighting"]);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");

  const propertyTypes: Opt[] = [
    ["Apartment", L("Apartment", "شقة")],
    ["Villa", L("Villa", "فيلا")],
    ["Office", L("Office", "مكتب")],
    ["Hotel", L("Hotel", "فندق")],
    ["Commercial building", L("Commercial building", "مبنى تجاري")],
    ["Other", L("Other", "أخرى")],
  ];
  const serviceOptions: Opt[] = [
    ["Lighting", L("Lighting", "الإضاءة")],
    ["Security", L("Security", "الأمان")],
    ["Climate", L("Climate", "المناخ والتكييف")],
    ["Access", L("Access", "التحكم في الدخول")],
    ["Energy", L("Energy", "الطاقة")],
    ["Custom IoT", L("Custom IoT", "إنترنت الأشياء المخصص")],
  ];
  const stages: Opt[] = [
    ["Planning", L("Planning", "التخطيط")],
    ["Under construction", L("Under construction", "قيد الإنشاء")],
    ["Existing property", L("Existing property", "عقار قائم")],
  ];
  const timelines: Opt[] = [
    ["Within 1 month", L("Within 1 month", "خلال شهر")],
    ["1–3 months", L("1–3 months", "من 1 إلى 3 أشهر")],
    ["3–6 months", L("3–6 months", "من 3 إلى 6 أشهر")],
    ["6+ months", L("6+ months", "أكثر من 6 أشهر")],
  ];
  const budgets: Opt[] = [
    ["Under EGP 100K", L("Under EGP 100K", "أقل من 100 ألف جنيه")],
    ["EGP 100K–250K", L("EGP 100K–250K", "من 100 إلى 250 ألف جنيه")],
    ["EGP 250K–500K", L("EGP 250K–500K", "من 250 إلى 500 ألف جنيه")],
    ["EGP 500K–1M", L("EGP 500K–1M", "من 500 ألف إلى مليون جنيه")],
    ["EGP 1M+", L("EGP 1M+", "مليون جنيه فأكثر")],
  ];
  const contactMethods: Opt[] = [
    ["Phone", L("Phone", "الهاتف")],
    ["WhatsApp", L("WhatsApp", "واتساب")],
    ["Email", L("Email", "البريد الإلكتروني")],
  ];

  const genericError = L("Something went wrong.", "حدث خطأ ما. حاول مرة أخرى.");

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
      if (!res.ok || !json.ok) throw new Error(json.error ?? genericError);
      setReference(json.reference);
      setStatus("success");
    } catch (e) {
      setError(e instanceof Error ? e.message : genericError);
      setStatus("error");
    }
  };

  if (status === "success")
    return (
      <div className="form-card success-state">
        <span className="success-icon">
          <Icon name="check" size={34} />
        </span>
        <h3>{L("Request received", "تم استلام طلبك")}</h3>
        <strong className="reference">
          {L("REFERENCE", "رقم المرجع")} · <bdi dir="ltr">{reference}</bdi>
        </strong>
        <p>
          {L(
            "Thank you. We will contact you within 24 business hours to review your requirements.",
            "شكرًا لك. سنتواصل معك خلال 24 ساعة عمل لمراجعة متطلباتك.",
          )}
        </p>
        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            setStatus("idle");
            setSelected(["Lighting"]);
          }}
        >
          {L("Submit another request", "إرسال طلب آخر")}
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
          label={L("Full name", "الاسم بالكامل")}
          required
          placeholder={L("Your full name", "اكتب اسمك بالكامل")}
        />
        <InputField
          name="company"
          label={L("Company / organization", "الشركة / الجهة")}
          placeholder={L("Optional", "اختياري")}
        />
      </div>
      <div className="form-row">
        <InputField
          name="phone"
          label={L("Phone number", "رقم الهاتف")}
          type="tel"
          dir="ltr"
          required
          placeholder="+20 1XX XXX XXXX"
        />
        <InputField
          name="email"
          label={L("Email address", "البريد الإلكتروني")}
          type="email"
          dir="ltr"
          required
          placeholder="name@company.com"
        />
      </div>
      <div className="form-row">
        <InputField
          name="location"
          label={L("Project location", "موقع المشروع")}
          placeholder={L("City", "المدينة")}
        />
        <label className="field">
          <span>
            {L("Property type", "نوع العقار")}
            <b>*</b>
          </span>
          <select name="propertyType" required defaultValue="">
            <option value="" disabled>
              {L("Select property type", "اختر نوع العقار")}
            </option>
            {propertyTypes.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="field">
        <legend>{L("Services required", "الخدمات المطلوبة")}</legend>
        <div className="service-chips">
          {serviceOptions.map(([value, label]) => (
            <button
              type="button"
              className={selected.includes(value) ? "selected" : ""}
              onClick={() =>
                setSelected(
                  selected.includes(value)
                    ? selected.filter((x) => x !== value)
                    : [...selected, value],
                )
              }
              key={value}
            >
              {selected.includes(value) && <Icon name="check" size={14} />}
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="form-row">
        <label className="field">
          <span>{L("Project stage", "مرحلة المشروع")}</span>
          <select name="stage" defaultValue="">
            <option value="" disabled>
              {L("Select stage", "اختر المرحلة")}
            </option>
            {stages.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>{L("Estimated timeline", "الجدول الزمني المتوقع")}</span>
          <select name="timeline" defaultValue="">
            <option value="" disabled>
              {L("Select timeline", "اختر المدة")}
            </option>
            {timelines.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="field">
        <span>{L("Approximate budget", "الميزانية التقريبية")}</span>
        <select name="budget" defaultValue="">
          <option value="" disabled>
            {L("Select a range", "اختر نطاقًا")}
          </option>
          {budgets.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>{L("Project details", "تفاصيل المشروع")}</span>
        <textarea
          name="details"
          placeholder={L(
            "Please describe the property, required systems and relevant programme information.",
            "اشرح لنا العقار والأنظمة المطلوبة وأي معلومات عن الجدول الزمني للمشروع.",
          )}
          rows={4}
        />
      </label>

      <fieldset className="field contact-method">
        <legend>
          {L("Preferred contact method", "وسيلة التواصل المفضلة")}
        </legend>
        <div>
          {contactMethods.map(([value, label], i) => (
            <label key={value}>
              <input
                type="radio"
                name="contactMethod"
                value={value}
                defaultChecked={i === 1}
              />
              <span>{label}</span>
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
          {L(
            "I agree to be contacted regarding this request and accept the privacy policy.",
            "أوافق على التواصل معي بخصوص هذا الطلب وأقبل سياسة الخصوصية.",
          )}
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
            <span className="spinner" />{" "}
            {L("Submitting request…", "جارٍ إرسال الطلب…")}
          </>
        ) : (
          <>
            {L("Submit request", "إرسال الطلب")} <Icon name="arrow" />
          </>
        )}
      </Button>
    </form>
  );
}
