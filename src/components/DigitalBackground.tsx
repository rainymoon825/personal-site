import { useEffect, useMemo, useRef, useState } from "react";

type Mode = "rest" | "about" | "projects" | "experience";

const modes: Record<Mode, { color: string; glow: string; speed: number }> = {
  rest: { color: "#5c221a", glow: "#d96b45", speed: 1 },
  about: { color: "#74313d", glow: "#d8728b", speed: 0.75 },
  projects: { color: "#843a16", glow: "#e5963e", speed: 1.45 },
  experience: { color: "#46512c", glow: "#9cab61", speed: 0.95 },
};

interface DigitalBackgroundProps {
  showBrainWaves?: boolean;
}

function DigitalBackground({ showBrainWaves = true }: DigitalBackgroundProps) {
  const pointer = useRef({ previousX: -1000, previousY: -1000, speed: 0, lastMovedAt: 0 });
  const [signal, setSignal] = useState({ phase: 0, activity: 0, mode: "rest" as Mode });

  useEffect(() => {
    let animationFrame = 0;
    let activity = 0;
    let phase = 0;
    let lastSignalUpdate = 0;
    let mode: Mode = "rest";

    const updateMode = () => {
      const viewportMiddle = window.innerHeight * 0.52;
      const sections: Array<[string, Mode]> = [["about", "about"], ["projects", "projects"], ["experience", "experience"]];
      const current = sections.find(([id]) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const { top, bottom } = section.getBoundingClientRect();
        return top <= viewportMiddle && bottom >= viewportMiddle;
      });
      mode = current?.[1] ?? "rest";
    };

    const movePointer = (event: PointerEvent) => {
      const distance = Math.hypot(event.clientX - pointer.current.previousX, event.clientY - pointer.current.previousY);
      pointer.current.speed = Math.max(0.4, Math.min(1, distance / 18));
      pointer.current.previousX = event.clientX;
      pointer.current.previousY = event.clientY;
      pointer.current.lastMovedAt = performance.now();
    };

    const animate = (now: number) => {
      const timeSinceMovement = now - pointer.current.lastMovedAt;
      const movementStrength = Math.max(0, 1 - timeSinceMovement / 700) * pointer.current.speed;
      activity += (movementStrength - activity) * 0.15;
      phase += 0.07 + activity * 0.4;
      if (now - lastSignalUpdate > 33) {
        setSignal({ phase, activity, mode });
        lastSignalUpdate = now;
      }
      animationFrame = window.requestAnimationFrame(animate);
    };

    updateMode();
    window.addEventListener("scroll", updateMode, { passive: true });
    document.addEventListener("pointermove", movePointer, true);
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateMode);
      document.removeEventListener("pointermove", movePointer, true);
    };
  }, []);

  const mode = modes[signal.mode];
  const points = useMemo(() => {
    const amplitude = 14 + signal.activity * 34;
    const frequency = 0.03 + signal.activity * 0.045;
    return Array.from({ length: 121 }, (_, index) => {
      const x = index * 5;
      const wave = Math.sin(x * frequency + signal.phase) * amplitude * 0.18;
      const noise = Math.sin(x * frequency * 4.6 + signal.phase * 1.7) * amplitude * 0.1;
      const beat = (x + signal.phase * 36) % 118;
      const spike = Math.exp(-Math.pow((beat - 59) / 5.5, 2)) * amplitude * 0.82;
      return `${x},${130 + wave + noise - spike}`;
    }).join(" ");
  }, [signal]);

  return (
    <div className={`particle-network-animation background-${signal.mode}`} aria-hidden="true">
      {showBrainWaves && (
      <svg className="eeg-display" viewBox="0 0 600 260" role="img" aria-label="Animated brain waves">
        <defs>
          <pattern id="eeg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={mode.color} strokeOpacity="0.22" strokeWidth="1" />
          </pattern>
          <filter id="eeg-glow" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect x="1" y="1" width="598" height="258" rx="12" fill="rgba(255,250,242,0.45)" stroke={mode.color} strokeOpacity="0.65" />
        <rect x="18" y="44" width="564" height="185" fill="url(#eeg-grid)" />
        <text x="20" y="28" fill={mode.color} fontSize="14" fontFamily="Arial, sans-serif" fontWeight="700">LIVE BRAIN WAVES</text>
        {signal.activity > 0.12 && (
          <text x="580" y="28" fill={mode.color} fontSize="12" fontFamily="Arial, sans-serif" textAnchor="end">
            HAND INPUT
          </text>
        )}
        <line x1="18" x2="582" y1="130" y2="130" stroke={mode.color} strokeOpacity="0.34" />
        <polyline points={points} fill="none" stroke={mode.glow} strokeOpacity="0.32" strokeWidth="8" filter="url(#eeg-glow)" />
        <polyline points={points} fill="none" stroke={mode.color} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
      )}
    </div>
  );
}

export default DigitalBackground;
