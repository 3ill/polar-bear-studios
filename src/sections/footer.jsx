import TextEffectWithExit from "@/shared/components/text-effect";
import { FooterLinks } from "@/shared/constants";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="c-space relative mt-25 flex w-full flex-col bg-neutral-700/50 py-5">
      <div className="absolute top-1.5 flex origin-top-left scale-[1] gap-2 text-black dark:text-white">
        <TextEffectWithExit
          text="Powered by Polar Bear"
          style=" text-lg tracking-wider font-bold text-neutral-50"
        />
      </div>
      <div className="font-grotesk flex flex-col gap-2 pt-[40px]">
        {FooterLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="font-grotesk text-sm font-light text-neutral-300 capitalize"
          >
            <div className="flex flex-row gap-2 text-nowrap">
              <p>{link.name}</p>
              <ArrowRight className="h-3 w-3 -rotate-45 text-neutral-300" />
            </div>
          </a>
        ))}
      </div>

      <div className="font-grotesk flex items-center gap-2 self-center pt-4 font-light">
        <p className="text-[12px] text-neutral-50">
          © 2026 Polar Bear Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
