import GridBackground from "@/shared/components/grid-background";
import { HoverBorderGradient } from "@/shared/components/ui/hover-border-gradient";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Upload = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  if (!email) {
    return (
      <section id="upload" className="overflow-x-hidden">
        <GridBackground>
          <div className="flex min-h-screen flex-col items-center justify-center gap-5">
            <h1 className="font-bebas motion-preset-expand motion-duration-700 max-w-prose text-3xl font-bold tracking-wider text-neutral-50 sm:text-5xl lg:text-6xl">
              You are not on the waitlist yet!
            </h1>

            <HoverBorderGradient>
              <a
                href="/#waitlist"
                className="group flex flex-row items-center gap-2 text-nowrap"
              >
                <p className="font-bebas text-lg tracking-wider text-neutral-50 sm:text-xl">
                  Join Now
                </p>{" "}
                <ArrowRight className="h-4 w-4 rotate-45 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </HoverBorderGradient>
          </div>
        </GridBackground>
      </section>
    );
  }

  return (
    <section
      id="upload"
      className="c-space flex min-h-screen w-full flex-col items-center overflow-x-hidden text-center"
    >
      <h1 className="font-bebas text-4xl font-bold text-neutral-50 sm:text-5xl lg:text-6xl">
        Upload
      </h1>

      <p className="font-grotesk mt-6 max-w-2xl px-4 text-lg text-neutral-400 sm:text-xl">
        Uploading as{" "}
        <span className="font-medium text-neutral-50">{email}</span>
      </p>
    </section>
  );
};

export default Upload;
