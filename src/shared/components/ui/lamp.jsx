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
        "relative z-0 flex min-h-screen w-full flex-col items-start justify-start overflow-hidden rounded-md bg-black pt-20",
        className
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-start justify-center">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-white via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-[100%] bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-[100%] w-40 bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-white text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute right-0 bottom-0 z-20 h-[100%] w-40 bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute right-0 bottom-0 z-20 h-40 w-[100%] bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-34 w-[28rem] -translate-y-1/2 rounded-full bg-white opacity-50 blur-3xl sm:h-48 sm:w-[40rem]"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "17rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-34 w-68 -translate-y-[6rem] rounded-full bg-neutral-100 blur-3xl sm:h-48 sm:w-96"
        ></motion.div>
        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "24rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-1 w-[24rem] translate-y-[2rem] rounded-lg bg-neutral-100 shadow-[0_0_20px_rgba(255,255,255,0.8)] sm:h-1 sm:w-[30rem] sm:translate-y-[1rem]"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
      </div>
      <div className="relative z-50 flex w-full -translate-y-160 flex-col items-center px-5 sm:-translate-y-60">
        {children}
      </div>
    </div>
  );
};
