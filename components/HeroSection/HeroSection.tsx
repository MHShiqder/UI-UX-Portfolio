// HeroSection.tsx

"use client";

import { motion, Variants, Transition, easeOut } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";
import { CountsUp } from "./CountsUp";
// import dynamic from "next/dynamic";
import { PhoneIcon } from "@heroicons/react/24/outline";

// ✅ Dynamically import Lottie Player (client-side only)
// const LottiePlayer = dynamic(
//   () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
//   { ssr: false }
// );

// --------------------
// Motion Variants
// --------------------

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

export const fadeLeftTransition = (delay = 0): Transition => ({
  duration: 0.8,
  delay,
  ease: easeOut,
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const fadeUpTransition = (delay = 0): Transition => ({
  duration: 0.8,
  delay,
  ease: easeOut,
});

// --------------------
// Component
// --------------------

export default function HeroSection() {
  return (
    <section className="section-continar pt-20">
      <div className="wrapper">
        <div className="contentText d-flex">
          {/* Text Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={fadeLeftTransition(0.3)}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.h1
              variants={fadeUp}
              transition={fadeUpTransition(0.5)}
              className="hero-title hero-title-color mb-4"
            >
              Creative UI UX
              <motion.span
                variants={fadeUp}
                transition={fadeUpTransition(0.8)}
                className="hero-title-color ml-2"
              >
                Design Agency
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={fadeUpTransition(1.1)}
              className="text-md md:text-lg text-content dark:text-foreground/80 mb-6 leading-relaxed"
            >
              Helping startups and brands stand out through smart design. We
              turn ideas into sleek, functional, user-validated interfaces.
              UI/UX that delivers results, not just pretty pixels.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={fadeUpTransition(1.3)}
              className="flex justify-center md:justify-start md:gap-4"
            >
              <CustomButton
                variant="outline"
                icon={<PhoneIcon className="h-4 w-4" />}
                onClick={() => window.open("/call")}
                className="uppercase hidden md:block"
              >
                Book A call
              </CustomButton>
            </motion.div>

            {/* Countup */}
            <div className="mt-6">
              <CountsUp />
            </div>
          </motion.div>

          {/* Client-side-only Lottie / Video Animation */}
          <div className="w-full md:w-1/2 flex justify-center animate-float">
            <video
              src="/video/updated-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
