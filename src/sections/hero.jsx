import GlowWave from "@components/glow-wave";
import { LampContainer } from "@/shared/components/ui/lamp";
import { HoverBorderGradient } from "@/shared/components/ui/hover-border-gradient";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full overflow-x-hidden overflow-y-auto scroll-smooth"
    >
      <LampContainer>
        <div className="c-space flex w-full flex-col items-center justify-center">
          <GlowWave
            text="Archi VR"
            className="font-bebas text-[60px] font-bold text-neutral-50 sm:text-6xl lg:text-8xl"
            letterDelay={0.05}
            animationDuration={0.6}
          />
          <p className="motion-preset-expand motion-duration-300 font-grotesk mt-6 mb-6 max-w-2xl px-4 text-center text-sm text-neutral-400 capitalize sm:text-lg md:text-xl">
            Upload 3D models and experience immersive visualization in your
            browser or VR headset
          </p>
          <HoverBorderGradient>
            <a
              href="#waitlist"
              className="group flex flex-row items-center gap-2 text-nowrap"
            >
              <p className="font-bebas text-sm tracking-wider text-neutral-50">
                Join Now
              </p>{" "}
              <ArrowRight className="h-4 w-4 rotate-45 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </HoverBorderGradient>
        </div>
      </LampContainer>
    </section>
  );
};

export default Hero;
