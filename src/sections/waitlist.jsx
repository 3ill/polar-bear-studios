import { motion } from "framer-motion";
import { staggerContainer, textVariant2 } from "@/utils/motion";
import WaitlistForm from "@/features/waitlist/components/waitlist-form";

const WaitList = () => {
  return (
    <section id="waitlist" className="c-space min-h-screen w-full">
      <div className="justify-none lg:justfy-between flex h-full w-full flex-col items-center gap-8 px-4 py-12 lg:flex-row lg:gap-16 lg:px-24 lg:py-24">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex w-full flex-col gap-4 lg:w-1/2 lg:gap-8"
        >
          <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="font-bebas text-3xl font-bold tracking-wide text-neutral-50 md:text-5xl"
          >
            Join the waitlist
          </motion.h2>
          <motion.p
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="font-grotesk text-sm text-neutral-400 capitalize md:text-lg"
          >
            Be the first to experience our immersive 3D model visualization
            platform. Sign up for early access and stay updated on our launch.{" "}
            <br />
            <span className="text-neutral-600">
              Email might be in your spam folder, ensure you check
            </span>
          </motion.p>
        </motion.div>

        <div className="relative flex w-full flex-col gap-4 lg:w-1/2 lg:gap-8">
          {/* Gradient Background */}
          <div className="absolute inset-0 -z-10 rounded-[20px] bg-gradient-to-br from-white/10 via-neutral-300/5 to-transparent blur-xl"></div>

          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};

export default WaitList;
