import { motion, useReducedMotion, useSpring } from "motion/react";
import "./PillButton.css";

const spring = { stiffness: 300, damping: 22, mass: 0.5 };

export default function PillButton({
  href,
  children,
  variant = "solid", // "solid" or "ghost"
  dot = variant === "solid", // the red signal dot
  external = false,
}) {
  const reduce = useReducedMotion();
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  function onMove(e) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    // 7 Light: the glow follows the cursor
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
    // 8 Magnet: lean toward the cursor (mouse only, never with reduced motion)
    if (reduce || e.pointerType !== "mouse") return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      className={`pill${variant === "ghost" ? " pill--ghost" : ""}`}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }} // 9 Press
      transition={{ type: "spring", bounce: 0, duration: 0.25 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {dot && <span className="pill-dot" aria-hidden="true" />}
      <span>{children}</span>
      <svg
        className="pill-arrow"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </motion.a>
  );
}
