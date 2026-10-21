'use client';
import {
  FormEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
// import "../index.css";
import "./rtl.css";
  
/* ------------------------------------------------------------------ */
/* Language                                                            */
/* ------------------------------------------------------------------ */
 import { LangContext, useL, useLang, type Lang } from "../src/lang";
import RequestFormar from "../src/RequestFormar";
type IconName =
  | "arrow"
  | "bolt"
  | "bulb"
  | "camera"
  | "check"
  | "chevron"
  | "cloud"
  | "clock"
  | "curtain"
  | "energy"
  | "eye"
  | "lock"
  | "menu"
  | "message"
  | "moon"
  | "phone"
  | "shield"
  | "spark"
  | "sun"
  | "thermo"
  | "voice"
  |"facebook"
  | "x";

export const iconPaths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  facebook: (
    <>
      <path
        d="M180 512H98.008c-13.695 0-24.836-11.14-24.836-24.836V302.227H25.336C11.64 302.227.5 291.082.5 277.39v-79.246c0-13.696 11.14-24.836 24.836-24.836h47.836v-39.684c0-39.348 12.355-72.824 35.726-96.805C132.375 12.73 165.184 0 203.778 0l62.53.102c13.672.023 24.794 11.164 24.794 24.836v73.578c0 13.695-11.137 24.836-24.829 24.836l-42.101.015c-12.84 0-16.11 2.574-16.809 3.363-1.152 1.31-2.523 5.008-2.523 15.223v31.352h58.27c4.386 0 8.636 1.082 12.288 3.12 7.88 4.403 12.778 12.727 12.778 21.723l-.031 79.247c0 13.687-11.141 24.828-24.836 24.828h-58.47v184.941C204.84 500.86 193.696 512 180 512m-76.812-30.016h71.632V288.79c0-9.144 7.442-16.582 16.582-16.582h66.727l.027-68.883h-66.758c-9.14 0-16.578-7.437-16.578-16.582v-44.789c0-11.726 1.192-25.062 10.043-35.086 10.696-12.117 27.551-13.515 39.301-13.515l36.922-.016V30.109l-57.332-.093c-62.024 0-100.566 39.703-100.566 103.609v53.117c0 9.14-7.438 16.582-16.579 16.582H30.516v68.883h56.093c9.141 0 16.579 7.438 16.579 16.582zM266.25 30.117h.004zm0 0"
        fill="#000000"
        opacity="1"
        data-original="#000000"
        
      ></path>
    </>
  ),
  bolt: (
    <>
      <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 22h4M8.7 14.8a7 7 0 1 1 6.6 0c-.8.6-1.3 1.4-1.3 2.2h-4c0-.8-.5-1.6-1.3-2.2Z" />
    </>
  ),
  camera: (
    <>
      <path d="M14.5 4 16 7h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4l1.5-3h5Z" />
      <circle cx="12" cy="13" r="3" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  cloud: (
    <path d="M17.5 19H6a4 4 0 0 1-.4-8A6.5 6.5 0 0 1 18 9a5 5 0 0 1-.5 10Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  curtain: (
    <>
      <path d="M4 3h16M6 3v18M18 3v18M6 8c3 0 4 2 6 4-2 2-3 4-6 4M18 8c-3 0-4 2-6 4 2 2 3 4 6 4" />
    </>
  ),
  energy: (
    <>
      <path d="M3 12a9 9 0 1 0 9-9" />
      <path d="m13 8-4 5h4l-2 4" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A8 8 0 1 1 21 15Z" />,
  moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  spark: (
    <path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2ZM5 16l.8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8L5 16Z" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  thermo: (
    <>
      <path d="M14 14.8V5a3 3 0 0 0-6 0v9.8a5 5 0 1 0 6 0Z" />
      <path d="M11 9v7" />
    </>
  ),
  voice: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8" />
    </>
  ),
  x: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
};

export  function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      className={name === "arrow" ? "icon-arrow" : undefined}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

export  function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`logo ${footer ? "footer-logo" : ""}`}
      href="#home"
      aria-label="Zaki home"
    >
      <img
        className="logo-color"
        src="/brand/zaki-horizontal-bilingual-color.svg"
        alt="Zaki — ذكي"
      />
      <img
        className="logo-reverse"
        src="/brand/zaki-horizontal-bilingual-reverse.svg"
        alt="Zaki — ذكي"
      />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Data (English exports kept as-is; Arabic versions sit beside them)  */
/* ------------------------------------------------------------------ */
export const services = [
  {
    icon: "bulb" as IconName,
    title: "Smart Lighting Control",
    text: "Centralized scenes, occupancy logic and daylight-responsive control.",
    detail: "Dimming · occupancy · daylight",
    featured: true,
  },
  {
    icon: "camera" as IconName,
    title: "Security & CCTV Systems",
    text: "Integrated surveillance, verified alerts and secure remote access.",
    detail: "AI alerts · remote view · recording",
    featured: true,
  },
  {
    icon: "lock" as IconName,
    title: "Smart Locks & Access",
    text: "Auditable, role-based access for residents, guests and personnel.",
    detail: "PIN · biometric · temporary access",
  },
  {
    icon: "thermo" as IconName,
    title: "Climate & HVAC Automation",
    text: "Zoned temperature control that balances comfort and efficiency.",
    detail: "HVAC · schedules · air quality",
  },
  {
    icon: "energy" as IconName,
    title: "Energy Optimization",
    text: "Live metering, analysis and controls that reduce avoidable demand.",
    detail: "Metering · alerts · reports",
  },
  {
    icon: "curtain" as IconName,
    title: "Motorized Shading",
    text: "Coordinated privacy, solar control and façade automation.",
    detail: "Motors · scenes · sun tracking",
  },
  {
    icon: "voice" as IconName,
    title: "Voice & Mobile Control",
    text: "Secure control across approved voice platforms and mobile devices.",
    detail: "Alexa · Google · mobile",
  },
  {
    icon: "cloud" as IconName,
    title: "Custom IoT Solutions",
    text: "Specified sensors, gateways and operational dashboards.",
    detail: "Sensors · MQTT · analytics",
  },
];

// Same order as `services` above
export const servicesAr = [
  {
    title: "التحكم الذكي في الإضاءة",
    text: "مشاهد مركزية ومنطق تشغيل حسب الإشغال وتحكم يتجاوب مع ضوء النهار.",
    detail: "تعتيم · استشعار الإشغال · ضوء النهار",
  },
  {
    title: "أنظمة الأمان وكاميرات المراقبة",
    text: "مراقبة متكاملة وتنبيهات موثّقة ووصول آمن عن بُعد.",
    detail: "تنبيهات ذكية · مشاهدة عن بُعد · تسجيل",
  },
  {
    title: "الأقفال الذكية والتحكم في الدخول",
    text: "صلاحيات دخول قابلة للمراجعة ومحددة بالأدوار للسكان والضيوف والعاملين.",
    detail: "رمز PIN · بصمة · دخول مؤقت",
  },
  {
    title: "أتمتة المناخ والتكييف",
    text: "تحكم مقسّم على مناطق في درجة الحرارة يوازن بين الراحة وكفاءة الطاقة.",
    detail: "تكييف · جداول زمنية · جودة الهواء",
  },
  {
    title: "ترشيد الطاقة",
    text: "قياس لحظي وتحليل وعناصر تحكم تقلّل الاستهلاك غير الضروري.",
    detail: "قياس · تنبيهات · تقارير",
  },
  {
    title: "الستائر والتظليل الآلي",
    text: "خصوصية وحماية من الشمس وأتمتة للواجهات بشكل منسّق.",
    detail: "محركات · مشاهد · تتبع الشمس",
  },
  {
    title: "التحكم بالصوت والموبايل",
    text: "تحكم آمن عبر منصات الصوت المعتمدة والأجهزة المحمولة.",
    detail: "Alexa · Google · الموبايل",
  },
  {
    title: "حلول إنترنت الأشياء المخصصة",
    text: "حساسات وبوابات ولوحات تشغيل مصمّمة حسب احتياج المشروع.",
    detail: "حساسات · MQTT · تحليلات",
  },
];

export const faqs = [
  [
    "Can you automate an existing home?",
    "Yes. We design retrofit systems that minimize wall work and disruption. Following a site survey, we specify the appropriate wired, wireless or hybrid approach.",
  ],
  [
    "Will everything still work if the internet goes down?",
    "Yes. Core functions such as lights, climate, locks, and scenes run locally. Internet is only needed for remote access and selected cloud integrations.",
  ],
  [
    "Which smart home brands do you support?",
    "We work across Matter, KNX, Zigbee, Z-Wave, Wi-Fi, and MQTT ecosystems, choosing reliable products that suit your project rather than locking you into one brand.",
  ],
  [
    "How long does installation take?",
    "A typical apartment takes 2–5 days. Villas and commercial spaces vary by scope. We provide a clear timeline before any work begins.",
  ],
  [
    "Can I start small and expand later?",
    "Yes. Every system is designed modularly, so you can begin with lighting or security and add climate, shading, energy, and more over time.",
  ],
  [
    "Do you provide support after installation?",
    "Every project includes onboarding, documentation, and post-installation care. Our support plans add remote diagnostics, updates, and priority visits.",
  ],
];

export const faqsAr = [
  [
    "هل يمكن أتمتة منزل قائم بالفعل؟",
    "نعم. نصمم أنظمة تركيب لاحق (Retrofit) تقلّل أعمال الحفر والإزعاج. وبعد المعاينة الميدانية نحدد الأسلوب المناسب: سلكي أو لاسلكي أو هجين.",
  ],
  [
    "هل سيظل كل شيء يعمل لو انقطع الإنترنت؟",
    "نعم. الوظائف الأساسية مثل الإضاءة والتكييف والأقفال والمشاهد تعمل محليًا. الإنترنت مطلوب فقط للتحكم عن بُعد وبعض التكاملات السحابية.",
  ],
  [
    "ما الماركات التي تدعمونها؟",
    "نعمل عبر منظومات Matter وKNX وZigbee وZ-Wave وWi-Fi وMQTT، ونختار منتجات موثوقة تناسب مشروعك دون أن نقيّدك بماركة واحدة.",
  ],
  [
    "كم يستغرق التركيب؟",
    "الشقة العادية تحتاج من 2 إلى 5 أيام. أما الفيلات والمساحات التجارية فتختلف حسب نطاق العمل. نقدّم جدولًا زمنيًا واضحًا قبل بدء أي عمل.",
  ],
  [
    "هل أستطيع البدء بنظام صغير ثم التوسّع لاحقًا؟",
    "نعم. كل نظام مصمم بشكل معياري، فيمكنك البدء بالإضاءة أو الأمان ثم إضافة التكييف والتظليل والطاقة وغيرها مع الوقت.",
  ],
  [
    "هل تقدمون دعمًا بعد التركيب؟",
    "كل مشروع يشمل التدريب على الاستخدام والتوثيق والعناية بعد التركيب. وتضيف خطط الدعم لدينا التشخيص عن بُعد والتحديثات والزيارات ذات الأولوية.",
  ],
];

/* ------------------------------------------------------------------ */
/* Shared UI                                                           */
/* ------------------------------------------------------------------ */
export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  const className = `btn btn-${variant}`;
  return href ? (
    <a className={className} href={href}>
      {children}
    </a>
  ) : (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <div className="section-title">{title}</div>
      {text && <p>{text}</p>}
    </div>
  );
}

type ThemeMode = "auto" | "light" | "dark";

function ThemeSwitch({
  mode,
  onChange,
  compact = false,
}: {
  mode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
  compact?: boolean;
}) {
  const L = useL();
  const isDay = new Date().getHours() >= 6 && new Date().getHours() < 18;
  const modes: { value: ThemeMode; icon: IconName; label: string }[] = [
    { value: "auto", icon: "clock", label: L("Auto", "تلقائي") },
    { value: "light", icon: "sun", label: L("Light", "فاتح") },
    { value: "dark", icon: "moon", label: L("Dark", "داكن") },
  ];
  return (
    <div
      className={`theme-switch ${compact ? "compact" : ""}`}
      role="group"
      aria-label={L("Color theme", "لون الواجهة")}
    >
      {modes.map((item) => (
        <button
          key={item.value}
          className={mode === item.value ? "active" : ""}
          onClick={() => onChange(item.value)}
          aria-pressed={mode === item.value}
          title={
            item.value === "auto"
              ? L(
                  `Auto: switches to ${isDay ? "Dark at 6:00 PM" : "Light at 6:00 AM"}`,
                  `تلقائي: يتحول إلى ${isDay ? "الداكن الساعة 6:00 مساءً" : "الفاتح الساعة 6:00 صباحًا"}`,
                )
              : L(`${item.label} theme`, `الوضع ${item.label}`)
          }
        >
          <Icon name={item.icon} size={15} />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

function Navbar({
  mode,
  onTheme,
  menu,
  onMenu,
  rtl,
  // onLanguage,
}: {
  mode: ThemeMode;
  onTheme: (mode: ThemeMode) => void;
  menu: boolean;
  onMenu: () => void;
  rtl: boolean;
  // onLanguage: () => void;
}) {
  const L = useL();
  const links: [string, string][] = [
    [L("Solutions", "الحلول"), "sectors"],
    [L("Services", "الخدمات"), "services"],
    [L("Process", "آلية العمل"), "process"],
    [L("Projects", "المشاريع"), "projects"],
    [L("FAQ", "الأسئلة الشائعة"), "faq"],
  ];
  return (
    <header className="navbar">
      <Logo />
      <nav
        className={menu ? "nav-links open" : "nav-links"}
        aria-label={L("Primary navigation", "التنقل الرئيسي")}
      >
        {links.map(([item, id]) => (
          <a href={`#${id}`} key={id} onClick={() => menu && onMenu()}>
            {item}
          </a>
        ))}
        <div className="mobile-nav-actions">
          <div className="mobile-settings">
            <ThemeSwitch mode={mode} onChange={onTheme} />
        
          </div>
          <Button href="#quote">
            {L("Request a consultation", "اطلب استشارة")} <Icon name="arrow" />
          </Button>
        </div>
      </nav>
      <div className="nav-actions">
       
        <ThemeSwitch mode={mode} onChange={onTheme} compact />
        <Button href="#quote">
          {L("Request a consultation", "اطلب استشارة")} <Icon name="arrow" />
        </Button>
      </div>
      <button
        className="menu-btn icon-btn"
        onClick={onMenu}
        aria-label={L("Toggle menu", "فتح/إغلاق القائمة")}
      >
        <Icon name={menu ? "x" : "menu"} />
      </button>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */
function Hero() {
  const L = useL();
  const ar = useLang() === "ar";
  return (
    <main className="hero" id="home">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow hero-label">
            <span /> {L("Integrated smart building systems", "أنظمة متكاملة للمباني الذكية")}
          </div>
          <h1>
            {L("Intelligent living,", "حياة ذكية،")}
            <br />
            <span>{L("engineered.", "بمعايير هندسية.")}</span>
          </h1>
          <div
            className="arabic-tagline"
            lang={ar ? "en" : "ar"}
            dir="rtl"
          >
            {L("حياة ذكية، بمعايير هندسية", "Intelligent living, engineered")}
          </div>
          <p>
            {L(
              "Integrated lighting, security, climate and energy systems—designed, installed and supported by one accountable engineering team.",
              "أنظمة إضاءة وأمان وتكييف وطاقة متكاملة — نصممها ونركّبها وندعمها بفريق هندسي واحد مسؤول.",
            )}
          </p>
          <div className="hero-actions">
            <Button href="#quote">
              {L("Request a consultation", "اطلب استشارة")} <Icon name="arrow" />
            </Button>
            <Button href="#services" variant="secondary">
              {L("View our services", "تعرّف على خدماتنا")}
            </Button>
          </div>
          <div className="trust-row">
            <div>
              <strong>350+</strong>
              <span>{L("Projects delivered", "مشروع منفّذ")}</span>
            </div>
            <i />
            <div>
              <strong>{L("9 years", "9 سنوات")}</strong>
              <span>{L("Engineering experience", "خبرة هندسية")}</span>
            </div>
            <i />
            <div>
              <strong>24/7</strong>
              <span>{L("Technical support", "دعم فني")}</span>
            </div>
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label={L(
            "Smart living room with connected controls",
            "غرفة معيشة ذكية بأدوات تحكم متصلة",
          )}
        >
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1738229115060-c94bbe5e548a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=1400"
              alt={L(
                "Premium contemporary living room with warm smart lighting",
                "غرفة معيشة عصرية فاخرة بإضاءة ذكية دافئة",
              )}
            />
            <div className="image-shade" />
          </div>
          <div className="status-chip chip-light">
            <span className="chip-icon amber">
              <Icon name="bulb" />
            </span>
            <span>
              <small>{L("LIGHTING", "الإضاءة")}</small>
              <strong>{L("Evening calm", "هدوء المساء")}</strong>
            </span>
            <span className="toggle on" />
          </div>
          <div className="status-chip chip-temp">
            <span className="chip-icon cyan">
              <Icon name="thermo" />
            </span>
            <span>
              <small>{L("CLIMATE", "المناخ")}</small>
              <strong>22.5°C</strong>
            </span>
            <span className="trend">{L("OPTIMAL", "مثالي")}</span>
          </div>
          <div className="status-chip chip-lock">
            <span className="chip-icon violet">
              <Icon name="lock" />
            </span>
            <span>
              <small>{L("SECURITY", "الأمان")}</small>
              <strong>{L("All secured", "كل شيء مؤمَّن")}</strong>
            </span>
            <Icon name="check" size={17} />
          </div>
          <div className="visual-footer">
            <span>
              <i className="live-dot" /> {L("SYSTEM ONLINE", "النظام متصل")}
            </span>
            <span>{L("12 devices connected", "12 جهازًا متصلًا")}</span>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>{L("SCROLL TO DISCOVER", "مرّر للاستكشاف")}</span>
        <i />
      </div>
    </main>
  );
}

function TrustBar() {
  const L = useL();
  return (
    <div className="trust-bar">
      <div className="container">
        <span>
          {L("SUPPORTED STANDARDS & PLATFORMS", "المعايير والمنصات المدعومة")}
        </span>
        {[
          "Zigbee",
          "Z-Wave",
          "Matter",
          "KNX",
          "MQTT",
          "Wi-Fi",
          "Alexa",
          "Google Home",
        ].map((item) => (
          <strong key={item}>{item}</strong>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ar = useLang() === "ar";
  const c = ar ? { ...service, ...servicesAr[index] } : service;
  return (
    <article className={`service-card ${service.featured ? "featured" : ""}`}>
      <div className="service-top">
        <span className="service-icon">
          <Icon name={service.icon} size={25} />
        </span>
        <span className="service-index">0{index + 1}</span>
      </div>
      <div>
        <h3>{c.title}</h3>
        <p>{c.text}</p>
      </div>
      <div className="service-detail">
        <span>{c.detail}</span>
        <Icon name="arrow" />
      </div>
    </article>
  );
}

function Services() {
  const L = useL();
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-intro">
          <SectionHeading
            eyebrow={L("Services", "الخدمات")}
            title={L(
              "Integrated smart home and IoT services.",
              "خدمات متكاملة للمنزل الذكي وإنترنت الأشياء.",
            )}
            text={L(
              "Engineered systems for residential, commercial and hospitality environments, delivered through one coordinated scope.",
              "أنظمة هندسية للبيئات السكنية والتجارية والفندقية، تُنفَّذ ضمن نطاق عمل واحد منسّق.",
            )}
          />
          <span className="section-count">{L("08 SERVICES", "8 خدمات")}</span>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorTabs() {
  const L = useL();
  const sectors = [
    {
      title: L("Residential", "سكني"),
      text: L(
        "Integrated systems that improve comfort, security and energy performance without adding complexity.",
        "أنظمة متكاملة ترفع الراحة والأمان وكفاءة الطاقة دون تعقيد إضافي.",
      ),
      points: L(
        [
          "Centralized scene control",
          "Privacy-first security",
          "Energy-aware automation",
        ],
        ["تحكم مركزي في المشاهد", "أمان يحترم الخصوصية", "أتمتة واعية بالطاقة"],
      ),
      image:
        "https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=1200",
    },
    {
      title: L("Commercial & Offices", "تجاري ومكاتب"),
      text: L(
        "Scalable controls and operational visibility for productive, efficient workplaces.",
        "تحكم قابل للتوسع ورؤية تشغيلية لبيئات عمل منتجة وكفؤة.",
      ),
      points: L(
        [
          "Occupancy-based lighting",
          "Access and attendance",
          "Central facility dashboards",
        ],
        ["إضاءة حسب الإشغال", "الدخول والحضور", "لوحات متابعة مركزية للمرافق"],
      ),
      image:
        "https://images.unsplash.com/photo-1666876744043-ac474c8026af?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=1200",
    },
    {
      title: L("Hospitality", "ضيافة"),
      text: L(
        "Reliable guest-room automation that improves experience while protecting operating margins.",
        "أتمتة موثوقة لغرف النزلاء تحسّن التجربة وتحافظ على هوامش التشغيل.",
      ),
      points: L(
        [
          "Guest-room management",
          "Energy optimization",
          "Central maintenance alerts",
        ],
        ["إدارة غرف النزلاء", "ترشيد الطاقة", "تنبيهات صيانة مركزية"],
      ),
      image:
        "https://images.unsplash.com/photo-1730128459616-4ee4c3b84ed8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=1200",
    },
  ];
  const [active, setActive] = useState(0);
  const sector = sectors[active];
  return (
    <section className="section sectors" id="sectors">
      <div className="container">
        <SectionHeading
          eyebrow={L("Solutions by sector", "الحلول حسب القطاع")}
          title={L(
            "Engineered for the way each building operates.",
            "حلول مهندسة لطريقة تشغيل كل مبنى.",
          )}
          text={L(
            "A disciplined approach tailored to the technical, operational and user requirements of every property type.",
            "نهج منضبط مصمم وفق المتطلبات الفنية والتشغيلية ومتطلبات المستخدم لكل نوع من العقارات.",
          )}
        />
        <div className="sector-layout">
          <div className="sector-tabs" role="tablist">
            {sectors.map((item, index) => (
              <button
                key={index}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
                role="tab"
                aria-selected={active === index}
              >
                <span>0{index + 1}</span>
                <strong>{item.title}</strong>
                <Icon name="arrow" />
              </button>
            ))}
          </div>
          <article className="sector-card">
            <img
              src={sector.image}
              alt={L(
                `${sector.title} smart building environment`,
                `بيئة مبنى ذكي — ${sector.title}`,
              )}
            />
            <div className="sector-overlay">
              <span>{sector.title}</span>
              <p>{sector.text}</p>
              <ul>
                {sector.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const L = useL();
  const steps = [
    [
      "01",
      L("Consultation", "الاستشارة"),
      L(
        "We assess the property, objectives, technical constraints and project programme.",
        "نقيّم العقار والأهداف والقيود الفنية والجدول الزمني للمشروع.",
      ),
    ],
    [
      "02",
      L("Design & proposal", "التصميم والعرض"),
      L(
        "A documented system design, product schedule, scope and commercial proposal.",
        "تصميم موثّق للنظام وجدول بالمنتجات ونطاق العمل والعرض المالي.",
      ),
    ],
    [
      "03",
      L("Installation & commissioning", "التركيب والتشغيل"),
      L(
        "Coordinated installation, testing, programming and formal handover.",
        "تركيب منسّق واختبار وبرمجة وتسليم رسمي.",
      ),
    ],
    [
      "04",
      L("Support & maintenance", "الدعم والصيانة"),
      L(
        "Responsive technical support, preventive care and controlled system updates.",
        "دعم فني سريع وصيانة وقائية وتحديثات منضبطة للنظام.",
      ),
    ],
  ];
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHeading
          eyebrow={L("Our process", "آلية عملنا")}
          title={L(
            "A controlled process from brief to handover.",
            "عملية محكمة من الفكرة حتى التسليم.",
          )}
          text={L(
            "Defined responsibilities, documented decisions and professional commissioning at every stage.",
            "مسؤوليات محددة وقرارات موثقة وتشغيل احترافي في كل مرحلة.",
          )}
          center
        />
        <div className="timeline">
          {steps.map(([num, title, text], index) => (
            <div className="step" key={num}>
              <div className="step-marker">
                <span>{num}</span>
                {index < steps.length - 1 && <i />}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  const L = useL();
  return (
    <div className="dashboard-wrap">
      <div className="dashboard">
        <div className="dash-head">
          <div>
            <small>{L("GOOD EVENING", "مساء الخير")}</small>
            <strong>{L("Your home is ready.", "بيتك جاهز.")}</strong>
          </div>
          <div className="avatar">{L("MA", "م.أ")}</div>
        </div>
        <div className="scene-row">
          <button className="scene active">
            <Icon name="spark" />
            <span>{L("Relax", "استرخاء")}</span>
          </button>
          <button className="scene">
            <Icon name="sun" />
            <span>{L("Bright", "إضاءة كاملة")}</span>
          </button>
          <button className="scene">
            <Icon name="eye" />
            <span>{L("Away", "غياب")}</span>
          </button>
        </div>
        <div className="dash-grid">
          <div className="dash-card climate">
            <span className="chip-icon cyan">
              <Icon name="thermo" />
            </span>
            <small>{L("LIVING ROOM", "غرفة المعيشة")}</small>
            <strong>22.5°</strong>
            <div className="range">
              <span />
            </div>
            <div className="dash-meta">
              <span>{L("Cooling", "تبريد")}</span>
              <span>{L("45% humidity", "رطوبة 45%")}</span>
            </div>
          </div>
          <div className="dash-card security">
            <div>
              <small>{L("SECURITY", "الأمان")}</small>
              <strong>
                <Icon name="shield" /> {L("Armed home", "النظام مُفعَّل")}
              </strong>
            </div>
            <div className="security-ring">
              <Icon name="check" />
              <span>4/4</span>
            </div>
          </div>
          <div className="dash-card chart-card">
            <div>
              <small>{L("ENERGY TODAY", "طاقة اليوم")}</small>
              <strong>
                18.4 <span>kWh</span>
              </strong>
            </div>
            <div className="chart">
              <i style={{ height: "34%" }} />
              <i style={{ height: "52%" }} />
              <i style={{ height: "43%" }} />
              <i style={{ height: "75%" }} />
              <i style={{ height: "60%" }} />
              <i className="hot" style={{ height: "88%" }} />
              <i style={{ height: "66%" }} />
            </div>
            <div className="chart-labels">
              <span>{L("MON", "الاثنين")}</span>
              <span>{L("NOW", "الآن")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="phone-card">
        <div className="phone-top" />
        <span className="chip-icon amber" style={{ marginTop: 0 }}>
          <Icon name="bulb" />
        </span>
        <small style={{ marginTop: 0 }}>{L("LIGHTS ON", "إضاءة مفعّلة")}</small>
        <strong>8</strong>
        <span>{L("of 14 devices", "من 14 جهازًا")}</span>
        <div className="mini-dots">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <i className={n < 5 ? "active" : ""} key={n} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Solutions() {
  const L = useL();
  const benefits = [
    [
      L("Reliability", "الموثوقية"),
      L(
        "Specified components, disciplined installation and verified commissioning.",
        "مكوّنات محددة بدقة وتركيب منضبط وتشغيل تجريبي موثّق.",
      ),
    ],
    [
      L("Security & privacy", "الأمان والخصوصية"),
      L(
        "Local-first controls, structured access and carefully managed integrations.",
        "تحكم محلي أولًا وصلاحيات منظمة وتكاملات تُدار بعناية.",
      ),
    ],
    [
      L("Energy efficiency", "كفاءة الطاقة"),
      L(
        "Measured consumption and automation strategies that reduce avoidable demand.",
        "استهلاك مقيس واستراتيجيات أتمتة تقلل الاستهلاك غير الضروري.",
      ),
    ],
    [
      L("Scalability", "قابلية التوسع"),
      L(
        "Standards-based infrastructure designed to expand with the property.",
        "بنية تحتية قائمة على المعايير القياسية تنمو مع العقار.",
      ),
    ],
  ];
  return (
    <section className="section solutions" id="solutions">
      <div className="container solutions-grid">
        <div>
          <SectionHeading
            eyebrow={L("Why Zaki", "لماذا ذكي")}
            title={L(
              "Engineering discipline behind every interaction.",
              "انضباط هندسي خلف كل تفاعل.",
            )}
            text={L(
              "We combine system design, installation and long-term support under one accountable technical team.",
              "نجمع بين تصميم الأنظمة والتركيب والدعم طويل الأمد ضمن فريق فني واحد مسؤول.",
            )}
          />
          <div className="benefits">
            {benefits.map(([title, text], i) => (
              <div className="benefit" key={i}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Dashboard />
      </div>
    </section>
  );
}

function Projects() {
  const L = useL();
  const projects = [
    {
      type: L("Residential villa", "فيلا سكنية"),
      location: L("New Cairo", "القاهرة الجديدة"),
      scope: L("Lighting · HVAC · Security", "إضاءة · تكييف · أمان"),
      result: L("28% lower energy use", "استهلاك طاقة أقل بنسبة 28%"),
      image:
        "https://images.unsplash.com/photo-1719561975005-d2c2b08c6ed8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=900",
    },
    {
      type: L("Corporate office", "مكتب شركة"),
      location: L("Smart Village", "القرية الذكية"),
      scope: L("Access · Lighting · Analytics", "دخول · إضاءة · تحليلات"),
      result: L("19% lower operating cost", "تكلفة تشغيل أقل بنسبة 19%"),
      image:
        "https://images.unsplash.com/photo-1666876644556-05f782fe49da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=900",
    },
    {
      type: L("Boutique hospitality", "ضيافة بوتيك"),
      location: L("North Coast", "الساحل الشمالي"),
      scope: L("GRMS · Energy · Guest access", "إدارة الغرف · طاقة · دخول النزلاء"),
      result: L("31% lower room demand", "طلب أقل على الغرفة بنسبة 31%"),
      image:
        "https://images.unsplash.com/photo-1699586197060-fbc6d8b20ecd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=900",
    },
  ];
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-intro">
          <SectionHeading
            eyebrow={L("Selected projects", "مشاريع مختارة")}
            title={L(
              "Measured outcomes across every sector.",
              "نتائج قابلة للقياس في كل قطاع.",
            )}
            text={L(
              "Representative implementations designed around operational priorities, user experience and whole-life value.",
              "تنفيذات تمثيلية مصممة حول الأولويات التشغيلية وتجربة المستخدم والقيمة على مدى عمر المشروع.",
            )}
          />
          <span className="section-count">{L("CASE STUDIES", "دراسات حالة")}</span>
        </div>
        <div className="project-grid">
          {projects.map((project, i) => (
            <article className="project-card" key={i}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={L(
                    `${project.type} in ${project.location}`,
                    `${project.type} — ${project.location}`,
                  )}
                />
                <span>{project.result}</span>
              </div>
              <div className="project-info">
                <small>
                  {project.type} · {project.location}
                </small>
                <h3>{project.scope}</h3>
                <a href="#quote">
                  {L("View case study", "عرض دراسة الحالة")}{" "}
                  <Icon name="arrow" size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const L = useL();
  const stats = [
    ["350+", L("Projects delivered", "مشروع منفّذ")],
    ["6.8K", L("Devices connected", "جهاز متصل")],
    ["96%", L("Client referrals", "عملاء بتوصية")],
    ["12", L("Cities covered", "مدينة نغطيها")],
  ];
  const testimonials = [
    [
      L("AK", "أ.خ"),
      L("Ahmed Khalil", "أحمد خليل"),
      L("Villa owner, New Cairo", "مالك فيلا، القاهرة الجديدة"),
      L(
        "The Zaki team managed the design and commissioning with precision. The completed system is reliable and straightforward to operate.",
        "أدار فريق ذكي التصميم والتشغيل بدقة. النظام النهائي موثوق وسهل التشغيل.",
      ),
    ],
    [
      L("NM", "ن.م"),
      L("Nour Mansour", "نور منصور"),
      L("Operations Director, Serein", "مديرة العمليات، Serein"),
      L(
        "The office now provides clearer operational data and measurably lower energy demand without compromising staff comfort.",
        "المكتب الآن يوفّر بيانات تشغيلية أوضح واستهلاكًا للطاقة أقل بشكل ملموس دون التأثير على راحة الموظفين.",
      ),
    ],
    [
      L("OY", "ع.ي"),
      L("Omar Youssef", "عمر يوسف"),
      L("Development Director, North Coast", "مدير التطوير، الساحل الشمالي"),
      L(
        "Zaki understood both the technical requirements and the finish standards expected across the development.",
        "فهم فريق ذكي المتطلبات الفنية ومعايير التشطيب المطلوبة في المشروع بالكامل.",
      ),
    ],
  ];
  return (
    <section className="section proof">
      <div className="container">
        <div className="stats">
          {stats.map(([num, label]) => (
            <div className="stat" key={num}>
              <strong>{num}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="testimonial-head">
          <SectionHeading
            eyebrow={L("Client confidence", "ثقة العملاء")}
            title={L(
              "Trusted to deliver systems that perform.",
              "موثوقون في تقديم أنظمة تؤدي بكفاءة عالية.",
            )}
          />
          <div className="rating-summary">
            <strong>4.9</strong>
            <span>★★★★★</span>
            <small>{L("AVERAGE CLIENT RATING", "متوسط تقييم العملاء")}</small>
          </div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([initials, name, role, quote], i) => (
            <article className="testimonial" key={i}>
              <div className="quote-mark">“</div>
              <p>{quote}</p>
              <div className="person">
                <span className="avatar">{initials}</span>
                <div>
                  <strong>{name}</strong>
                  <small>{role}</small>
                </div>
                <span className="stars">★★★★★</span>
              </div>
            </article>
          ))}
        </div>
        <div className="protocols">
          <span>{L("WORKS WITH", "متوافق مع")}</span>
          {["ZIGBEE", "Z-WAVE", "matter", "Wi-Fi", "KNX", "MQTT"].map(
            (brand) => (
              <strong key={brand}>{brand}</strong>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  const L = useL();
  return (
    <section className="cta-section">
      <div className="container cta-banner">
        <div>
          <span>{L("PLANNING A NEW PROJECT?", "هل تخطط لمشروع جديد؟")}</span>
          <h2>
            {L(
              "Plan your intelligent building with Zaki.",
              "خطّط لمبناك الذكي مع ذكي.",
            )}
          </h2>
        </div>
        <Button href="#quote">
          {L("Request a consultation", "اطلب استشارة")} <Icon name="arrow" />
        </Button>
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={open}>
        <span>{question}</span>
        <i>
          <Icon name="chevron" />
        </i>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

function Faq() {
  const L = useL();
  const ar = useLang() === "ar";
  const [open, setOpen] = useState(0);
  const items = ar ? faqsAr : faqs;
  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <div>
          <SectionHeading
            eyebrow={L("Questions, answered", "أسئلة وأجوبة")}
            title={L("Clarity before we begin.", "وضوح قبل أن نبدأ.")}
            text={L(
              "Still deciding what makes sense for your space? Start here—or speak directly with one of our system designers.",
              "لا تزال مترددًا بشأن الأنسب لمساحتك؟ ابدأ من هنا، أو تحدّث مباشرة مع أحد مصممي الأنظمة.",
            )}
          />
          <div className="faq-contact">
            <span className="chip-icon cyan">
              <Icon name="message" />
            </span>
            <div>
              <strong>{L("Have another question?", "لديك سؤال آخر؟")}</strong>
              <a href="#quote">
                {L("Talk to a specialist", "تحدّث مع مختص")} <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>
        <div>
          {items.map(([q, a], i) => (
            <FaqItem
              question={q}
              answer={a}
              open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  const L = useL();
  const ar = useLang() === "ar";
  // Phone numbers and emails must stay left-to-right inside an RTL page
  const ltr = ar
    ? { dir: "ltr" as const, style: { textAlign: "right" as const } }
    : {};
  return (
    <section className="section quote" id="quote">
      <div className="container quote-grid">
        <div className="quote-copy">
          <SectionHeading
            eyebrow={L("Project enquiry", "طلب مشروع")}
            title={L("Request a consultation.", "اطلب استشارة.")}
            text={L(
              "Provide the key project details and a Zaki system designer will contact you to define the appropriate next step.",
              "زوّدنا بالتفاصيل الأساسية للمشروع وسيتواصل معك مصمم أنظمة من ذكي لتحديد الخطوة التالية المناسبة.",
            )}
          />
          <div className="contact-list">
            <a href="tel:+201024244589">
              <span>
                <Icon name="phone" />
              </span>
              <div>
                <small>{L("PHONE", "الهاتف")}</small>
                <strong {...ltr}>+201024244589</strong>
              </div>
            </a>
            <a href="https://wa.me/201024244589">
              <span>
                <Icon name="message" />
              </span>
              <div>
                <small>{L("WHATSAPP", "واتساب")}</small>
                <strong {...ltr}>+201024244589</strong>
              </div>
            </a>
            <a href="mailto:info@zakismart.com">
              <span>
                <Icon name="arrow" />
              </span>
              <div>
                <small>{L("EMAIL", "البريد الإلكتروني")}</small>
                <strong {...ltr}>info@zakismart.com</strong>
              </div>
            </a>
            <div className="contact-static">
              <span>
                <Icon name="clock" />
              </span>
              <div>
                <small>{L("WORKING HOURS", "ساعات العمل")}</small>
                <strong>
                  {L(
                    "Sunday–Thursday · 09:00–18:00",
                    "من الأحد إلى الخميس · 9 ص – 6 م",
                  )}
                </strong>
              </div>
            </div>
          </div>
          <div className="reassurance">
            <Icon name="shield" />
            <span>
              <strong>
                {L(
                  "Our team responds within 24 business hours.",
                  "يردّ فريقنا خلال 24 ساعة عمل.",
                )}
              </strong>
              <br />
              {L(
                "Your project information is treated as confidential.",
                "معلومات مشروعك تُعامل بسرية تامة.",
              )}
            </span>
          </div>
        </div>
        <RequestFormar />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */
// For a dedicated Arabic route use: <App initialLang="ar" />
export default function App({ initialLang = "ar" }: { initialLang?: Lang }) {
  const [clockTick, setClockTick] = useState(0);
  const [menu, setMenu] = useState(false);
   const [lang, setLang] = useState<Lang>(initialLang);
  const rtl = lang === "ar";
  const isAutoLight = new Date().getHours() >= 6 && new Date().getHours() < 18;
  const [mode, setMode] = useState<ThemeMode>("auto");

  // Read the saved theme / language once, in the browser only
  useEffect(() => {
    const saved = localStorage.getItem("zaki-theme");
    if (saved === "light" || saved === "dark" || saved === "auto") {
      setMode(saved);
    }
    // A forced route language (e.g. /ar) wins over the saved one
    if (initialLang === "en") {
      const savedLang = localStorage.getItem("zaki-lang");
      if (savedLang === "ar" || savedLang === "en") setLang(savedLang);
    }
  }, [initialLang]);

  // Save when the user changes it
  const changeMode = (next: ThemeMode) => {
    setMode(next);
    localStorage.setItem("zaki-theme", next);
  };
  // const toggleLanguage = () => {
  //   const next: Lang = lang === "ar" ? "en" : "ar";
  //   setLang(next);
  //   localStorage.setItem("zaki-lang", next);
  // };
  const light = mode === "light" || (mode === "auto" && isAutoLight);
  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    document.documentElement.dataset.theme = light ? "light" : "dark";
    localStorage.setItem("zaki-theme", mode);
  }, [light, mode, clockTick]);
  useEffect(() => {
    if (mode !== "auto") return;
    const timer = window.setInterval(
      () => setClockTick((tick) => tick + 1),
      60000,
    );
    return () => window.clearInterval(timer);
  }, [mode]);
  useEffect(() => {
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.lang = rtl ? "ar" : "en";
  }, [rtl]);
  return (
    <LangContext.Provider value={lang}>
      <Navbar
        mode={mode}
        onTheme={changeMode}
        menu={menu}
        onMenu={() => setMenu(!menu)}
        rtl={rtl}
        // onLanguage={toggleLanguage}
      />
      <Hero />
      <TrustBar />
      <Services />
      <SectorTabs />
      <HowItWorks />
      <Solutions />
      <Projects />
      <Proof />
      <Faq />
      <CtaBanner />
      <Quote />
      <a
        className="whatsapp-float"
        href="https://wa.me/201024244589"
        aria-label={
          rtl ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"
        }
      >
        <Icon name="message" />
      </a>
    </LangContext.Provider>
  );
}
