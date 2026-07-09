import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { HoverBorderGradient } from "@/shared/components/ui/hover-border-gradient";
import { ArrowRight } from "lucide-react";
import { LampContainer } from "@/shared/components/ui/lamp";

const waitlistSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
});

const WaitList = () => {
  const form = useForm({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    form.reset();
  };

  return (
    <section id="waitlist" className="c-space min-h-screen w-full">
      <div className="justify-none lg:justfy-between flex h-full w-full flex-col items-center gap-8 px-4 py-12 lg:flex-row lg:gap-16 lg:px-24 lg:py-24">
        <div className="flex w-full flex-col gap-4 lg:w-1/2 lg:gap-8">
          <h2 className="font-bebas text-3xl font-bold tracking-wide text-neutral-50 md:text-5xl">
            Join the waitlist
          </h2>
          <p className="font-grotesk text-sm text-neutral-400 capitalize md:text-lg">
            Be the first to experience our immersive 3D model visualization
            platform. Sign up for early access and stay updated on our launch.
          </p>
        </div>

        <div className="relative flex w-full flex-col gap-4 sm:w-1/2 lg:gap-8">
          {/* Gradient Background */}
          <div className="absolute inset-0 -z-10 rounded-[20px] bg-gradient-to-br from-white/10 via-neutral-300/5 to-transparent blur-xl"></div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="c-space relative z-10 flex w-full flex-col items-center justify-center gap-5 rounded-[15px] bg-neutral-800/50 px-4 py-15 shadow-lg backdrop-blur-md sm:py-20 lg:gap-8 lg:px-8"
            >
              <h2 className="text-glow font-bebas pb-5 text-center text-2xl tracking-wider text-neutral-50 md:text-3xl">
                Request Access
              </h2>

              <div className="flex flex-col gap-4 sm:gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="form-label">First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John"
                          {...field}
                          className="form-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="form-label">Last name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Doe"
                          {...field}
                          className="form-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="@example.com"
                        {...field}
                        className="form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-2 self-center pt-20 sm:pt-25">
                <HoverBorderGradient>
                  <div className="flex flex-row items-center gap-2 text-nowrap">
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="font-bebas text-sm tracking-wider text-neutral-50"
                    >
                      Join Now
                    </Button>
                    <ArrowRight className="h-4 w-4 transition-all duration-300 hover:translate-x-1" />
                  </div>
                </HoverBorderGradient>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default WaitList;
