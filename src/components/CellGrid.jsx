import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Reference-style interactive cell grid: rows x cols of bordered cells that
// glow from sky-600 rgba(14,165,233,0.3) on hover proximity, masked with a
// radial fade at the top. Pure CSS + tiny JS, no canvas.
function CellGrid({ rows = 10, cols = 30, cellSize = 64, className = "" }) {
  const wrapRef = useRef(null);
  const [hot, setHot] = useState(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      if (col < 0 || row < 0 || col >= cols || row >= rows) {
        setHot(null);
        return;
      }
      setHot({ row, col });
    };
    const onLeave = () => setHot(null);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [rows, cols, cellSize]);

  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dist = hot ? Math.hypot(hot.row - r, hot.col - c) : 99;
      const glow = dist < 5 ? Math.max(0, 1 - dist / 5) : 0;
      cells.push(
        <div
          key={`${r}-${c}`}
          className="cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]"
          style={{
            backgroundColor: "var(--cell-fill-color)",
            borderColor: "var(--cell-border-color)",
            boxShadow:
              glow > 0
                ? `0px 0px ${Math.round(40 * glow)}px 1px rgba(14,165,233,${(0.3 * glow).toFixed(2)}) inset`
                : undefined,
          }}
        />
      );
    }
  }

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`relative z-[3] [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)] ${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: cols * cellSize,
        height: rows * cellSize,
        marginInline: "auto",
        ["--cell-border-color"]: "var(--bline)",
        ["--cell-fill-color"]: "var(--bgcard)",
        ["--cell-shadow-color"]: "var(--background)",
      }}
    >
      {cells}
    </div>
  );
}

export function useRevealGridCols() {
  const [cols, setCols] = useState(30);
  useEffect(() => {
    const update = () => {
      const w = Math.min(window.innerWidth, 1920);
      setCols(Math.max(8, Math.floor(w / 64)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

export default CellGrid;
