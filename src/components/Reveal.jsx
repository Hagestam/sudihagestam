import { useReducedMotion } from "motion/react";
import useInView from "../hooks/useInView.js";
import "./Reveal.css";

// Wrap anything in <Reveal> to fade it in the first time it scrolls into view.
export default function Reveal({ as: Tag = "div", className = "", children }) {
  const reduce = useReducedMotion();
  const [ref, inView] = useInView();
  const shown = reduce || inView;

  return (
    <Tag ref={ref} className={`reveal${shown ? " in" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
