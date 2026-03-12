import { motion } from "framer-motion";
import { useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const t = setTimeout(onComplete, 3200);
    return () => clearTimeout(t);
  }, [onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: 0.3 + i * 0.06, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  const welcomeText = "Welcome to";
  const brandText = "YarnixLabs";

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Ambient glows */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px] bg-emerald-500/15"
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* "Welcome to" */}
      <div className="flex gap-1 mb-4 relative z-10 overflow-hidden">
        {welcomeText.split("").map((char, i) => (
          <motion.span
            key={`w-${i}`}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="text-emerald-400/70 text-lg md:text-xl uppercase tracking-[0.3em] font-medium"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Brand name - letter by letter */}
      <div className="flex gap-0.5 relative z-10 overflow-hidden">
        {brandText.split("").map((char, i) => (
          <motion.span
            key={`b-${i}`}
            custom={i + welcomeText.length}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className={`text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide ${
              i >= 6 ? "text-emerald-400" : "text-white"
            }`}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Tagline fade up */}
      <motion.p
        className="text-white/40 text-sm mt-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        Building Intelligent Solutions
      </motion.p>

      {/* Screen fade out */}
      <motion.div
        className="absolute inset-0 bg-black z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
      />
    </motion.div>
  );
};

export default SplashScreen;
