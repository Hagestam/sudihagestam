import { useState } from "react";
import { useReducedMotion } from "motion/react";
import "./Media.css";

// Image frame with a grey placeholder fallback and a subtle tilt on mouse move.
export default function Media({ src, alt, hint, portrait = false }) {
  const [failed, setFailed] = useState(false);
  const reduce = useReducedMotion();

  function onMove(e) {
    if (reduce || e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg)`;
  }

  function onLeave(e) {
    e.currentTarget.style.transform = "";
  }

  return (
    <figure
      className={`media${portrait ? " media--portrait" : ""}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {src && !failed ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <span className="media-ph" role="img" aria-label={alt}>
          {hint}
        </span>
      )}
    </figure>
  );
}
