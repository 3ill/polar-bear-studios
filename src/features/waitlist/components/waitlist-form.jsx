import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { waitlistSchema } from "@/features/waitlist/schema/waitlist.schema";
import { useAddToWaitlist } from "@/features/waitlist/hooks/use-add-to-waitlist";
import { toast } from "sonner";
import ToastIcon from "@/shared/components/toast-icon";
import ToastDescription from "@/shared/components/toast-description";

const WaitlistForm = () => {
  const { mutateAsync: addToWaitlist } = useAddToWaitlist();
  const form = useForm({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const handleToast = (data) => {
    if (data.status === 201) {
      toast.success(data.message || "Successfully joined the waitlist!", {
        icon: <ToastIcon />,
        description: (
          <ToastDescription description="Check your email for next steps" />
        ),
        style: {
          backgroundColor: "oklch(62.7% 0.194 149.214)",
          fontSize: "15px",
          fontFamily: "Space Grotesk",
          color: "#ffffff",
          fontWeight: "600",
        },
      });
    } else if (data.status === 400) {
      toast.error("Validation Error", {
        icon: <ToastIcon />,
        description: (
          <ToastDescription
            description={`This email is already added to the waitlist`}
          />
        ),
        style: {
          backgroundColor: "oklch(62.8% 0.258 29.234)",
          fontSize: "15px",
          fontFamily: "Space Grotesk",
          color: "#ffffff",
          fontWeight: "600",
        },
      });
    } else {
      toast.error("Error", {
        icon: <ToastIcon />,
        description: <ToastDescription description="An error occurred" />,
        style: {
          backgroundColor: "oklch(62.8% 0.258 29.234)",
          fontSize: "15px",
          fontFamily: "Space Grotesk",
          color: "#ffffff",
          fontWeight: "600",
        },
      });
    }
  };

  const onSubmit = async (values) => {
    const data = await addToWaitlist(values);
    handleToast(data);

    if (data.status === 201) {
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="c-space relative z-10 flex w-full flex-col items-center justify-center gap-5 rounded-[15px] bg-neutral-800/50 py-10 shadow-lg backdrop-blur-md sm:py-20 lg:gap-8"
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
                <FormMessage className={`font-grotesk text-red-500`} />
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
                <FormMessage className={`font-grotesk text-red-500`} />
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
              <FormMessage className={`font-grotesk text-red-500`} />
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
  );
};

export default WaitlistForm;
