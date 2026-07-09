"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@lib/utils";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative z-0 flex min-h-screen w-full flex-col items-start justify-start overflow-hidden rounded-md bg-black pt-12 sm:pt-20",
        className
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-100 sm:scale-y-125 items-start justify-center">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="bg-gradient-conic absolute inset-auto right-1/2 h-40 w-[20rem] sm:h-56 sm:w-[30rem] overflow-visible from-white via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-32 sm:h-40 w-[100%] bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-[100%] w-32 sm:w-40 bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="bg-gradient-conic absolute inset-auto left-1/2 h-40 w-[20rem] sm:h-56 sm:w-[30rem] from-transparent via-transparent to-white text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute right-0 bottom-0 z-20 h-[100%] w-32 sm:w-40 bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute right-0 bottom-0 z-20 h-32 sm:h-40 w-[100%] bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-32 sm:h-48 w-full translate-y-8 sm:translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-32 sm:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-24 w-[18rem] -translate-y-1/2 rounded-full bg-white opacity-40 blur-2xl sm:h-48 sm:w-[40rem] sm:opacity-50 sm:blur-3xl"></div>
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "12rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-24 w-48 -translate-y-[4rem] rounded-full bg-neutral-100 blur-2xl sm:h-48 sm:w-96 sm:-translate-y-[6rem] sm:blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-1.5 w-[20rem] translate-y-[0.5rem] rounded-lg bg-neutral-100 shadow-[0_0_15px_rgba(255,255,255,0.6)] sm:h-1 sm:w-[30rem] sm:translate-y-[3rem] sm:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-32 sm:h-44 w-full -translate-y-[12rem] sm:-translate-y-[12.5rem] bg-black"></div>
      </div>
      <div className="relative z-50 flex w-full -translate-y-85 md:-translate-y-160  lg:-translate-y-60 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
