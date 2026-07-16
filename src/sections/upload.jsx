import GridBackground from "@/shared/components/grid-background";
import { HoverBorderGradient } from "@/shared/components/ui/hover-border-gradient";
import { ArrowBigLeftDashIcon, ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import UploadForm from "@/features/upload/components/upload-form";
import { useVerifyWaitlist } from "@/features/waitlist/hooks/use-verify-waitlist";
import TextEffectWithExit from "@/shared/components/text-effect";

const Upload = () => {
  const [searchParams] = useSearchParams();

  const emailParam = searchParams.get("email");
  const email = emailParam ? decodeURIComponent(emailParam) : null;
  const { data, isLoading } = useVerifyWaitlist(email);

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

  if (isLoading) {
    return (
      <section id="upload" className="min-h-screen overflow-x-hidden">
        <GridBackground>
          <div className="flex min-h-screen flex-col items-center justify-center gap-5">
            <TextEffectWithExit
              text="Verifying waitlist status..."
              style=" text-3xl sm:text-5xl tracking-wider font-bold text-neutral-50 max-w-prose"
            />
          </div>
        </GridBackground>
      </section>
    );
  }

  if (!data || data === false) {
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
    <section id="upload" className="overflow-x-hidden">
      <GridBackground>
        <div className="c-space flex min-h-screen w-full flex-col items-center overflow-x-hidden py-5 text-center">
          <div className="flex w-full max-w-4xl flex-row items-center justify-between">
            <a href="/#waitlist">
              <ArrowBigLeftDashIcon className="h-6 w-6 text-neutral-300 transition-all duration-300 hover:translate-x-1 hover:text-neutral-50 sm:h-8 sm:w-8" />
            </a>

            <div className="flex flex-row items-center gap-1">
              <div className="text-glow motion-preset-blink motion-duration-700 h-3 w-1 rounded-md bg-white"></div>
              <p className="font-mono text-[12px] text-neutral-300 sm:text-sm">
                {email}
              </p>
            </div>
          </div>

          <div className="relative mt-12 flex w-full max-w-xl flex-col items-center">
            <div className="absolute inset-0 -z-10 rounded-[20px] bg-gradient-to-br from-white/10 via-neutral-50/5 to-transparent blur-xl"></div>
            <UploadForm email={email} />
          </div>
        </div>
      </GridBackground>
    </section>
  );
};

export default Upload;
