import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { projects } from "../data/content.js";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

function cubicLength(start, control1, control2, end) {
  let length = 0;
  let previous = start;
  const samples = 32;

  for (let step = 1; step <= samples; step += 1) {
    const t = step / samples;
    const inverse = 1 - t;
    const point = {
      x: inverse ** 3 * start.x + 3 * inverse ** 2 * t * control1.x + 3 * inverse * t ** 2 * control2.x + t ** 3 * end.x,
      y: inverse ** 3 * start.y + 3 * inverse ** 2 * t * control1.y + 3 * inverse * t ** 2 * control2.y + t ** 3 * end.y,
    };
    length += Math.hypot(point.x - previous.x, point.y - previous.y);
    previous = point;
  }

  return length;
}

export default function Projects() {
  const listRef = useRef(null);
  const [geometry, setGeometry] = useState({ width: 0, height: 0, path: "", points: [] });
  const [activeIndex, setActiveIndex] = useState(-1);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 82%", "end 18%"],
  });
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const updateActiveProject = (progress) => {
      let reached = -1;
      if (progress > 0) {
        geometry.points.forEach((point, index) => {
          if (progress >= point.progress) reached = index;
        });
      }
      setActiveIndex(reached);
    };

    updateActiveProject(pathProgress.get());
    return pathProgress.on("change", updateActiveProject);
  }, [geometry.points, pathProgress]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;

    let frame = 0;
    const measure = () => {
      const bounds = list.getBoundingClientRect();
      const cards = [...list.querySelectorAll(":scope > .project")];
      const isStacked = window.matchMedia("(max-width: 820px)").matches;
      const points = cards.map((card) => {
        let x = 10;
        let bend = 10;

        if (!isStacked) {
          const [first, second] = [...card.children].slice(0, 2).map((child) => child.getBoundingClientRect());
          const left = first.left < second.left ? first : second;
          const right = first.left < second.left ? second : first;
          const gap = Math.max(0, right.left - left.right);
          x = (left.right + right.left) / 2 - bounds.left;
          bend = Math.min(gap * 0.44, 36);
        }

        return {
          x,
          y: card.offsetTop + card.offsetHeight / 2,
          bend,
        };
      });

      let path = "";
      const segmentLengths = [];
      if (points.length) {
        path = `M ${points[0].x} ${points[0].y}`;
        for (let index = 1; index < points.length; index += 1) {
          const previous = points[index - 1];
          const point = points[index];
          const middleY = (previous.y + point.y) / 2;
          const bend = Math.max(previous.bend, point.bend) * (index % 2 === 1 ? 1 : -1);
          const control1 = { x: previous.x + bend, y: middleY };
          const control2 = { x: point.x + bend, y: middleY };
          path += ` C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${point.x} ${point.y}`;
          segmentLengths.push(cubicLength(previous, control1, control2, point));
        }
      }

      const totalLength = segmentLengths.reduce((total, length) => total + length, 0);
      let traversedLength = 0;
      points.forEach((point, index) => {
        if (index > 0) traversedLength += segmentLengths[index - 1];
        point.progress = totalLength ? traversedLength / totalLength : 0;
      });

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
        {projects.map((p, index) => (
          <ProjectCard
            key={p.title}
            project={p}
            isReached={activeIndex >= index}
          />
        ))}
      </div>
    </section>
  );
}
