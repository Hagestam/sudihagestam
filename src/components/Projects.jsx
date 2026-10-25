import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { projects } from "../data/content.js";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

export default function Projects() {
  const listRef = useRef(null);
  const [geometry, setGeometry] = useState({ width: 0, height: 0, path: "", points: [] });
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 82%", "end 18%"],
  });
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;

    let frame = 0;
    const measure = () => {
      const bounds = list.getBoundingClientRect();
      const cards = [...list.querySelectorAll(":scope > .project")];
      const isStacked = window.matchMedia("(max-width: 820px)").matches;
      const points = cards.map((card, index) => {
        let x = 10;
        let bend = 0;

        if (!isStacked) {
          const [first, second] = [...card.children].slice(0, 2).map((child) => child.getBoundingClientRect());
          const left = first.left < second.left ? first : second;
          const right = first.left < second.left ? second : first;
          const gap = Math.max(0, right.left - left.right);
          x = (left.right + right.left) / 2 - bounds.left;
          bend = Math.min(gap * 0.32, 28) * (index % 2 === 0 ? 1 : -1);
        }

        return {
          x,
          y: card.offsetTop + card.offsetHeight / 2,
          bend,
        };
      });

      let path = "";
      if (points.length) {
        path = `M ${points[0].x} ${points[0].y}`;
        for (let index = 1; index < points.length; index += 1) {
          const previous = points[index - 1];
          const point = points[index];
          const middleY = (previous.y + point.y) / 2;
          const bend = (previous.bend + point.bend) / 2;
          path += ` C ${previous.x + bend} ${middleY}, ${point.x + bend} ${middleY}, ${point.x} ${point.y}`;
        }
      }

      setGeometry({ width: bounds.width, height: bounds.height, path, points });
    };
    const scheduleMeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    scheduleMeasure();
    window.addEventListener("resize", scheduleMeasure);
    const observer = "ResizeObserver" in window ? new ResizeObserver(scheduleMeasure) : null;
    observer?.observe(list);
    list.querySelectorAll(":scope > .project").forEach((card) => observer?.observe(card));
    document.fonts?.ready.then(scheduleMeasure);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", scheduleMeasure);
      observer?.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="section wrap">
      <h2 className="section-title">Projects</h2>
      <div className="project-list" ref={listRef}>
        {geometry.path && (
          <svg
            className="project-thread"
            viewBox={`0 0 ${geometry.width} ${geometry.height}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="project-thread__track" d={geometry.path} />
            <motion.path
              className="project-thread__drawn"
              d={geometry.path}
              style={{ pathLength: reduceMotion ? 1 : pathProgress }}
            />
            {geometry.points.map((point, index) => (
              <circle
                className="project-thread__node"
                key={`${index}-${point.y}`}
                cx={point.x}
                cy={point.y}
                r="3.5"
              />
            ))}
          </svg>
        )}
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
