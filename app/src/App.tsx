'use client';
import { FormEvent, ReactNode, useEffect, useState } from "react";
import "./index.css";
import RequestForm from "./RequestForm";
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
        alt="Zaki — زكي"
      />
      <img
        className="logo-reverse"
        src="/brand/zaki-horizontal-bilingual-reverse.svg"
        alt="Zaki — زكي"
      />
    </a>
  );
}

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
  const isDay = new Date().getHours() >= 6 && new Date().getHours() < 18;
  const modes: { value: ThemeMode; icon: IconName; label: string }[] = [
    { value: "auto", icon: "clock", label: "Auto" },
    { value: "light", icon: "sun", label: "Light" },
    { value: "dark", icon: "moon", label: "Dark" },
  ];
  return (
    <div
      className={`theme-switch ${compact ? "compact" : ""}`}
      role="group"
      aria-label="Color theme"
    >
      {modes.map((item) => (
        <button
          key={item.value}
          className={mode === item.value ? "active" : ""}
          onClick={() => onChange(item.value)}
          aria-pressed={mode === item.value}
          title={
            item.value === "auto"
              ? `Auto: switches to ${isDay ? "Dark at 6:00 PM" : "Light at 6:00 AM"}`
              : `${item.label} theme`
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
  onLanguage,
}: {
  mode: ThemeMode;
  onTheme: (mode: ThemeMode) => void;
  menu: boolean;
  onMenu: () => void;
  rtl: boolean;
  onLanguage: () => void;
}) {
  return (
    <header className="navbar">
      <Logo />
      <nav
        className={menu ? "nav-links open" : "nav-links"}
        aria-label="Primary navigation"
      >
        {[
          ["Solutions", "sectors"],
          ["Services", "services"],
          ["Process", "process"],
          ["Projects", "projects"],
          ["FAQ", "faq"],
        ].map(([item, id]) => (
          <a href={`#${id}`} key={item} onClick={() => menu && onMenu()}>
            {item}
          </a>
        ))}
        <div className="mobile-nav-actions">
          <div className="mobile-settings">
            <ThemeSwitch mode={mode} onChange={onTheme} />
            <button className="mobile-language" onClick={onLanguage}>
              {rtl ? "العربية / EN" : "EN / العربية"}
            </button>
          </div>
          <Button href="#quote">
            Request a consultation <Icon name="arrow" />
          </Button>
        </div>
      </nav>
      <div className="nav-actions">
        {/* <button
          className="icon-btn language"
          aria-label="Change language"
          onClick={onLanguage}
        >
          {rtl ? "AR" : "EN"} <span>/ {rtl ? "EN" : "AR"}</span>
        </button> */}
        <ThemeSwitch mode={mode} onChange={onTheme} compact />
        <Button href="#quote">
          Request a consultation <Icon name="arrow" />
        </Button>
      </div>
      <button
        className="menu-btn icon-btn"
        onClick={onMenu}
        aria-label="Toggle menu"
      >
        <Icon name={menu ? "x" : "menu"} />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <main className="hero" id="home">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow hero-label">
            <span /> Integrated smart building systems
          </div>
          <h1>
            Intelligent living,
            <br />
            <span>engineered.</span>
          </h1>
          <div className="arabic-tagline" lang="ar" dir="rtl">
            حياة ذكية، بمعايير هندسية
          </div>
          <p>
            Integrated lighting, security, climate and energy systems—designed,
            installed and supported by one accountable engineering team.
          </p>
          <div className="hero-actions">
            <Button href="#quote">
              Request a consultation <Icon name="arrow" />
            </Button>
            <Button href="#services" variant="secondary">
              View our services
            </Button>
          </div>
          <div className="trust-row">
            <div>
              <strong>350+</strong>
              <span>Projects delivered</span>
            </div>
            <i />
            <div>
              <strong>9 years</strong>
              <span>Engineering experience</span>
            </div>
            <i />
            <div>
              <strong>24/7</strong>
              <span>Technical support</span>
            </div>
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label="Smart living room with connected controls"
        >
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1738229115060-c94bbe5e548a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=1400"
              alt="Premium contemporary living room with warm smart lighting"
            />
            <div className="image-shade" />
          </div>
          <div className="status-chip chip-light">
            <span className="chip-icon amber">
              <Icon name="bulb" />
            </span>
            <span>
              <small>LIGHTING</small>
              <strong>Evening calm</strong>
            </span>
            <span className="toggle on" />
          </div>
          <div className="status-chip chip-temp">
            <span className="chip-icon cyan">
              <Icon name="thermo" />
            </span>
            <span>
              <small>CLIMATE</small>
              <strong>22.5°C</strong>
            </span>
            <span className="trend">OPTIMAL</span>
          </div>
          <div className="status-chip chip-lock">
            <span className="chip-icon violet">
              <Icon name="lock" />
            </span>
            <span>
              <small>SECURITY</small>
              <strong>All secured</strong>
            </span>
            <Icon name="check" size={17} />
          </div>
          <div className="visual-footer">
            <span>
              <i className="live-dot" /> SYSTEM ONLINE
            </span>
            <span>12 devices connected</span>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>SCROLL TO DISCOVER</span>
        <i />
      </div>
    </main>
  );
}

function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        <span>SUPPORTED STANDARDS & PLATFORMS</span>
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
  return (
    <article className={`service-card ${service.featured ? "featured" : ""}`}>
      <div className="service-top">
        <span className="service-icon">
          <Icon name={service.icon} size={25} />
        </span>
        <span className="service-index">0{index + 1}</span>
      </div>
      <div>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
      </div>
      <div className="service-detail">
        <span>{service.detail}</span>
        <Icon name="arrow" />
      </div>
    </article>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-intro">
          <SectionHeading
            eyebrow="Services"
            title="Integrated smart home and IoT services."
            text="Engineered systems for residential, commercial and hospitality environments, delivered through one coordinated scope."
          />
          <span className="section-count">08 SERVICES</span>
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
  const sectors = [
    {
      title: "Residential",
      text: "Integrated systems that improve comfort, security and energy performance without adding complexity.",
      points: [
        "Centralized scene control",
        "Privacy-first security",
        "Energy-aware automation",
      ],
      image:
        "https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=1200",
    },
    {
      title: "Commercial & Offices",
      text: "Scalable controls and operational visibility for productive, efficient workplaces.",
      points: [
        "Occupancy-based lighting",
        "Access and attendance",
        "Central facility dashboards",
      ],
      image:
        "https://images.unsplash.com/photo-1666876744043-ac474c8026af?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=1200",
    },
    {
      title: "Hospitality",
      text: "Reliable guest-room automation that improves experience while protecting operating margins.",
      points: [
        "Guest-room management",
        "Energy optimization",
        "Central maintenance alerts",
      ],
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
          eyebrow="Solutions by sector"
          title="Engineered for the way each building operates."
          text="A disciplined approach tailored to the technical, operational and user requirements of every property type."
        />
        <div className="sector-layout">
          <div className="sector-tabs" role="tablist">
            {sectors.map((item, index) => (
              <button
                key={item.title}
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
              alt={`${sector.title} smart building environment`}
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
  const steps = [
    [
      "01",
      "Consultation",
      "We assess the property, objectives, technical constraints and project programme.",
    ],
    [
      "02",
      "Design & proposal",
      "A documented system design, product schedule, scope and commercial proposal.",
    ],
    [
      "03",
      "Installation & commissioning",
      "Coordinated installation, testing, programming and formal handover.",
    ],
    [
      "04",
      "Support & maintenance",
      "Responsive technical support, preventive care and controlled system updates.",
    ],
  ];
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="Our process"
          title="A controlled process from brief to handover."
          text="Defined responsibilities, documented decisions and professional commissioning at every stage."
          center
        />
        <div className="timeline">
          {steps.map(([num, title, text], index) => (
            <div className="step" key={title}>
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
  return (
    <div className="dashboard-wrap">
      <div className="dashboard">
        <div className="dash-head">
          <div>
            <small>GOOD EVENING</small>
            <strong>Your home is ready.</strong>
          </div>
          <div className="avatar">MA</div>
        </div>
        <div className="scene-row">
          <button className="scene active">
            <Icon name="spark" />
            <span>Relax</span>
          </button>
          <button className="scene">
            <Icon name="sun" />
            <span>Bright</span>
          </button>
          <button className="scene">
            <Icon name="eye" />
            <span>Away</span>
          </button>
        </div>
        <div className="dash-grid">
          <div className="dash-card climate">
            <span className="chip-icon cyan">
              <Icon name="thermo" />
            </span>
            <small>LIVING ROOM</small>
            <strong>22.5°</strong>
            <div className="range">
              <span />
            </div>
            <div className="dash-meta">
              <span>Cooling</span>
              <span>45% humidity</span>
            </div>
          </div>
          <div className="dash-card security">
            <div>
              <small>SECURITY</small>
              <strong>
                <Icon name="shield" /> Armed home
              </strong>
            </div>
            <div className="security-ring">
              <Icon name="check" />
              <span>4/4</span>
            </div>
          </div>
          <div className="dash-card chart-card">
            <div>
              <small>ENERGY TODAY</small>
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
              <span>MON</span>
              <span>NOW</span>
            </div>
          </div>
        </div>
      </div>
      <div className="phone-card">
        <div className="phone-top" />
        <span className="chip-icon amber">
          <Icon name="bulb" />
        </span>
        <small>LIGHTS ON</small>
        <strong>8</strong>
        <span>of 14 devices</span>
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
  const benefits = [
    [
      "Reliability",
      "Specified components, disciplined installation and verified commissioning.",
    ],
    [
      "Security & privacy",
      "Local-first controls, structured access and carefully managed integrations.",
    ],
    [
      "Energy efficiency",
      "Measured consumption and automation strategies that reduce avoidable demand.",
    ],
    [
      "Scalability",
      "Standards-based infrastructure designed to expand with the property.",
    ],
  ];
  return (
    <section className="section solutions" id="solutions">
      <div className="container solutions-grid">
        <div>
          <SectionHeading
            eyebrow="Why Zaki"
            title="Engineering discipline behind every interaction."
            text="We combine system design, installation and long-term support under one accountable technical team."
          />
          <div className="benefits">
            {benefits.map(([title, text], i) => (
              <div className="benefit" key={title}>
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
  const projects = [
    {
      type: "Residential villa",
      location: "New Cairo",
      scope: "Lighting · HVAC · Security",
      result: "28% lower energy use",
      image:
        "https://images.unsplash.com/photo-1719561975005-d2c2b08c6ed8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=900",
    },
    {
      type: "Corporate office",
      location: "Smart Village",
      scope: "Access · Lighting · Analytics",
      result: "19% lower operating cost",
      image:
        "https://images.unsplash.com/photo-1666876644556-05f782fe49da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=900",
    },
    {
      type: "Boutique hospitality",
      location: "North Coast",
      scope: "GRMS · Energy · Guest access",
      result: "31% lower room demand",
      image:
        "https://images.unsplash.com/photo-1699586197060-fbc6d8b20ecd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=900",
    },
  ];
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-intro">
          <SectionHeading
            eyebrow="Selected projects"
            title="Measured outcomes across every sector."
            text="Representative implementations designed around operational priorities, user experience and whole-life value."
          />
          <span className="section-count">CASE STUDIES</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.type}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.type} in ${project.location}`}
                />
                <span>{project.result}</span>
              </div>
              <div className="project-info">
                <small>
                  {project.type} · {project.location}
                </small>
                <h3>{project.scope}</h3>
                <a href="#quote">
                  View case study <Icon name="arrow" size={17} />
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
  const stats = [
    ["350+", "Projects delivered"],
    ["6.8K", "Devices connected"],
    ["96%", "Client referrals"],
    ["12", "Cities covered"],
  ];
  const testimonials = [
    [
      "AK",
      "Ahmed Khalil",
      "Villa owner, New Cairo",
      "The Zaki team managed the design and commissioning with precision. The completed system is reliable and straightforward to operate.",
    ],
    [
      "NM",
      "Nour Mansour",
      "Operations Director, Serein",
      "The office now provides clearer operational data and measurably lower energy demand without compromising staff comfort.",
    ],
    [
      "OY",
      "Omar Youssef",
      "Development Director, North Coast",
      "Zaki understood both the technical requirements and the finish standards expected across the development.",
    ],
  ];
  return (
    <section className="section proof">
      <div className="container">
        <div className="stats">
          {stats.map(([num, label]) => (
            <div className="stat" key={label}>
              <strong>{num}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="testimonial-head">
          <SectionHeading
            eyebrow="Client confidence"
            title="Trusted to deliver systems that perform."
          />
          <div className="rating-summary">
            <strong>4.9</strong>
            <span>★★★★★</span>
            <small>AVERAGE CLIENT RATING</small>
          </div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([initials, name, role, quote]) => (
            <article className="testimonial" key={name}>
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
          <span>WORKS WITH</span>
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
  return (
    <section className="cta-section">
      <div className="container cta-banner">
        <div>
          <span>PLANNING A NEW PROJECT?</span>
          <h2>Plan your intelligent building with Zaki.</h2>
        </div>
        <Button href="#quote">
          Request a consultation <Icon name="arrow" />
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
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <div>
          <SectionHeading
            eyebrow="Questions, answered"
            title="Clarity before we begin."
            text="Still deciding what makes sense for your space? Start here—or speak directly with one of our system designers."
          />
          <div className="faq-contact">
            <span className="chip-icon cyan">
              <Icon name="message" />
            </span>
            <div>
              <strong>Have another question?</strong>
              <a href="#quote">
                Talk to a specialist <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>
        <div>
          {faqs.map(([q, a], i) => (
            <FaqItem
              question={q}
              answer={a}
              open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
              key={q}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



function Quote() {
  return (
    <section className="section quote" id="quote">
      <div className="container quote-grid">
        <div className="quote-copy">
          <SectionHeading
            eyebrow="Project enquiry"
            title="Request a consultation."
            text="Provide the key project details and a Zaki system designer will contact you to define the appropriate next step."
          />
          <div className="contact-list">
            <a href="tel:+201024244589">
              <span>
                <Icon name="phone" />
              </span>
              <div>
                <small>PHONE</small>
                <strong>+201024244589</strong>
              </div>
            </a>
            <a href="https://wa.me/201000000000">
              <span>
                <Icon name="message" />
              </span>
              <div>
                <small>WHATSAPP</small>
                <strong>+201024244589</strong>
              </div>
            </a>
            <a href="mailto:info@zakismart.com">
              <span>
                <Icon name="arrow" />
              </span>
              <div>
                <small>EMAIL</small>
                <strong>info@zakismart.com</strong>
              </div>
            </a>
            <div className="contact-static">
              <span>
                <Icon name="clock" />
              </span>
              <div>
                <small>WORKING HOURS</small>
                <strong>Sunday–Thursday · 09:00–18:00</strong>
              </div>
            </div>
          </div>
          <div className="reassurance">
            <Icon name="shield" />
            <span>
              <strong>Our team responds within 24 business hours.</strong>
              <br />
              Your project information is treated as confidential.
            </span>
          </div>
        </div>
        <RequestForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo footer />
          <p>
            Integrated smart home and IoT systems, engineered and supported
            across Egypt and the MENA region.
          </p>
        </div>
        <div>
          <strong>SERVICES</strong>
          <a href="#services">Smart home</a>
          <a href="#services">Security systems</a>
          <a href="#services">Energy management</a>
          <a href="#services">Custom IoT</a>
        </div>
        <div>
          <strong>COMPANY & SUPPORT</strong>
          <a href="#process">Our process</a>
          <a href="#projects">Projects</a>
          <a href="#faq">Technical FAQ</a>
          <a href="#quote">Contact</a>
        </div>
        <div>
          <strong>CONTACT</strong>
          <a href="mailto:info@zakismart.com">info@zakismart.com</a>
          <a href="tel:+201024244589">+201024244589</a>
          <span>Cairo, Egypt</span>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a
              href="https://www.linkedin.com/company/zakiismart"
              target="_blank"
              aria-label="LinkedIn"
            >
              IN
            </a>
            <a
              href="https://www.facebook.com/zakiismart"
              target="_blank"
              aria-label="Facebook"
            >
              FB
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Zaki Smart Spaces. All rights reserved.</span>
        <span>Privacy · Terms · Legal</span>
      </div>
      <div className="footer-word">zaki</div>
    </footer>
  );
}

export default function App() {
 
  const [clockTick, setClockTick] = useState(0);
  const [menu, setMenu] = useState(false);
  const [rtl, setRtl] = useState(false);
  const isAutoLight = new Date().getHours() >= 6 && new Date().getHours() < 18;
  const [mode, setMode] = useState<ThemeMode>("auto");

  // Read the saved theme once, in the browser only
  useEffect(() => {
    const saved = localStorage.getItem("zaki-theme");
    if (saved === "light" || saved === "dark" || saved === "auto") {
      setMode(saved);
    }
  }, []);

  // Save when the user changes it
  const changeMode = (next: ThemeMode) => {
    setMode(next);
    localStorage.setItem("zaki-theme", next);
  };
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
    <>
      <Navbar
        mode={mode}
        onTheme={setMode}
        menu={menu}
        onMenu={() => setMenu(!menu)}
        rtl={rtl}
        onLanguage={() => setRtl(!rtl)}
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
      <Footer />
      <a
        className="whatsapp-float"
        href="https://wa.me/201000000000"
        aria-label="Contact us on WhatsApp"
      >
        <Icon name="message" />
      </a>
    </>
  );
}
