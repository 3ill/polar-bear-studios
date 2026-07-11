import React from "react";
import { motion } from "motion/react";
import { cn } from "@lib/utils";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative z-0 flex min-h-screen w-full flex-col items-start justify-start overflow-hidden rounded-md bg-black pt-12 sm:pt-20",
        className
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-100 items-start justify-center sm:scale-y-125">
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
          className="bg-gradient-conic absolute inset-auto right-1/2 h-40 w-[20rem] overflow-visible from-white via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] sm:h-56 sm:w-[30rem]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-32 w-[100%] bg-black [mask-image:linear-gradient(to_top,white,transparent)] sm:h-40" />
          <div className="absolute bottom-0 left-0 z-20 h-[100%] w-32 bg-black [mask-image:linear-gradient(to_right,white,transparent)] sm:w-40" />
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
          className="bg-gradient-conic absolute inset-auto left-1/2 h-40 w-[20rem] from-transparent via-transparent to-white text-white [--conic-position:from_290deg_at_center_top] sm:h-56 sm:w-[30rem]"
        >
          <div className="absolute right-0 bottom-0 z-20 h-[100%] w-32 bg-black [mask-image:linear-gradient(to_left,white,transparent)] sm:w-40" />
          <div className="absolute right-0 bottom-0 z-20 h-32 w-[100%] bg-black [mask-image:linear-gradient(to_top,white,transparent)] sm:h-40" />
        </motion.div>
        <div className="absolute top-1/2 h-32 w-full translate-y-8 scale-x-150 bg-black blur-2xl sm:h-48 sm:translate-y-12"></div>
        <div className="absolute top-1/2 z-50 h-32 w-full bg-transparent opacity-10 backdrop-blur-md sm:h-48"></div>
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

        <div className="absolute inset-auto z-40 h-32 w-full -translate-y-[12rem] bg-black sm:h-44 sm:-translate-y-[12.5rem]"></div>
      </div>
      <div className="relative z-50 flex w-full -translate-y-85 flex-col items-center px-5 md:-translate-y-100 lg:-translate-y-60">
        {children}
      </div>
    </div>
  );
};
