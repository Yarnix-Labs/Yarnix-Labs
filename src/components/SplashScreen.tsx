import { motion } from "framer-motion";
import { useEffect } from "react";
import logo from "@/assets/logo.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const t = setTimeout(onComplete, 3200);
    return () => clearTimeout(t);
  }, [onComplete]);

  const welcomeText = "Welcome to";

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
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-emerald-400/70 text-sm md:text-base uppercase tracking-[0.4em] font-medium mb-8 relative z-10"
      >
        {welcomeText}
      </motion.p>

      {/* Brand Logo - Animated */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ 
            delay: 0.8, 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="relative"
        >
          <img 
            src={logo} 
            alt="YarnixLabs Logo" 
            className="h-80 w-80 md:h-[500px] md:w-[500px] object-contain relative z-10" 
          />
        </motion.div>
      </div>

      {/* Tagline fade up */}
      <motion.p
        className="text-white/40 text-sm mt-10 relative z-10 tracking-[0.1em]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        Building Intelligent Solutions
      </motion.p>

      {/* Screen fade out */}
      <motion.div
        className="absolute inset-0 bg-black z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.4 }}
      />
    </motion.div>
  );
};

export default SplashScreen;
