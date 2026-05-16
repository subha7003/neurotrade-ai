import { motion } from "motion/react";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

const COLORS = [
  "rgba(56,139,255,0.6)",
  "rgba(168,85,247,0.6)",
  "rgba(34,211,238,0.6)",
  "rgba(56,139,255,0.4)",
  "rgba(168,85,247,0.4)",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function ParticleBackground() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: seededRandom(i * 7) * 100,
      y: seededRandom(i * 13) * 100,
      size: 1 + seededRandom(i * 3) * 3,
      duration: 6 + seededRandom(i * 5) * 8,
      delay: seededRandom(i * 11) * 6,
      opacity: 0.2 + seededRandom(i * 17) * 0.5,
      color: COLORS[Math.floor(seededRandom(i * 19) * COLORS.length)],
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30 - seededRandom(p.id * 23) * 40, 0],
            x: [0, (seededRandom(p.id * 29) - 0.5) * 20, 0],
            opacity: [p.opacity, p.opacity * 0.4, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
