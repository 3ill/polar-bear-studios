import TextEffectWithExit from "@/shared/components/text-effect";
import { FooterLinks } from "@/shared/constants";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="c-space flex w-full flex-col relative bg-neutral-700/50 py-5">
      <div className="absolute top-1 flex origin-top-left scale-[1] gap-2 text-black dark:text-white">
        <TextEffectWithExit
          text="Powered by Polar Bear"
          style=" text-lg tracking-wider font-bold text-neutral-50"
        />
      </div>
      <div className="flex flex-col gap-2 font-grotesk pt-[40px]">
        {FooterLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="font-grotesk font-medium text-sm capitalize text-neutral-300"
          >
            <div className="flex flex-row gap-2 text-nowrap">
              <p>{link.name}</p>
              <ArrowRight className="w-3 h-3 -rotate-45 text-neutral-300" />
            </div>
          </a>
        ))}
      </div>

      <div className="font-grotesk flex items-center gap-2 self-center pt-4">
        <p className="text-[12px] text-neutral-50">
          © 2026 Polar Bear Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
