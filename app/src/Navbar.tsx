'use client';
import { useEffect, useState } from 'react'
import { Button, Icon, IconName, Logo } from './App';

 

export default function Navbar() {
      const [clockTick, setClockTick] = useState(0);
      const isAutoLight =
        new Date().getHours() >= 6 && new Date().getHours() < 18;
 
  const [mode, setMode] = useState<ThemeMode>("auto");
  const [menu, setMenu] = useState(false);
      const [rtl, setRtl] = useState(false);
        const onTheme = (mode: ThemeMode) => {
      setMode(mode);
    };
    const onMenu = () => {
      setMenu(!menu);
    };
      const onLanguage=() => {setRtl(!rtl)}   
  useEffect(() => {
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.lang = rtl ? "ar" : "en";
  }, [rtl]);
  useEffect(() => {
    const saved = localStorage.getItem("zaki-theme");
    if (saved === "light" || saved === "dark" || saved === "auto") {
      setMode(saved);
    }
  }, []);

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

