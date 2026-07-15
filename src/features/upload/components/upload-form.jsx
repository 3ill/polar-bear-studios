import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Upload } from "lucide-react";

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
import { uploadSchema } from "@/features/upload/schema/upload.schema";
import { toast } from "sonner";
import ToastIcon from "@/shared/components/toast-icon";
import ToastDescription from "@/shared/components/toast-description";
import GlowWave from "@/shared/components/glow-wave";

const UploadForm = () => {
  const form = useForm({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      name: "",
      model: undefined,
    },
  });

  const fileList = form.watch("model");
  const selectedFile = fileList?.[0];

  const getTruncatedName = (name, maxLength = 30) => {
    if (!name) return "";
    if (name.length <= maxLength) return name;
    const extensionIndex = name.lastIndexOf(".");
    if (extensionIndex !== -1 && name.length - extensionIndex < 10) {
      const ext = name.substring(extensionIndex);
      const base = name.substring(0, extensionIndex);
      const remainingLength = maxLength - ext.length - 3;
      if (remainingLength > 0) {
        return base.substring(0, remainingLength) + "..." + ext;
      }
    }
    return name.substring(0, maxLength - 3) + "...";
  };

  const onSubmit = async (values) => {
    const file = values.model[0];

    // TODO: wire this up to the upload endpoint once it is available.
    console.log("Uploading file:", file, "as", values.name);

    toast.success(`${values.name} is ready to upload`, {
      icon: <ToastIcon />,
      description: (
        <ToastDescription description="We'll process your model shortly" />
      ),
      style: {
        backgroundColor: "oklch(62.7% 0.194 149.214)",
        fontSize: "15px",
        fontFamily: "Space Grotesk",
        color: "#ffffff",
        fontWeight: "600",
      },
    });

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="c-space motion-preset-expand motion-duration-800 relative z-10 flex w-full max-w-xl flex-col items-center justify-center gap-5 rounded-[15px] bg-neutral-900/50 py-10 shadow-lg backdrop-blur-md sm:py-20 lg:gap-8"
      >
        <GlowWave
          text="Upload your model"
          className="font-bebas text-2xl font-bold text-neutral-50 md:text-3xl"
          letterDelay={0.05}
          animationDuration={0.6}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full px-4 sm:px-0">
              <FormLabel
                className="form-label font-grotesk text-sm text-neutral-300"
                htmlFor="name"
              >
                File Name
              </FormLabel>
              <FormControl>
                <Input
                  id="name"
                  placeholder="Enter file name"
                  className="form-input2"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-grotesk text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="model"
          render={({ field: { onChange, onBlur, name, ref } }) => (
            <FormItem className="w-full px-4 sm:px-0">
              <FormLabel className="form-label" htmlFor="model">
                .gltf or .glb file
              </FormLabel>
              <FormControl>
                <label
                  htmlFor="model"
                  className="flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-neutral-600 bg-transparent px-6 py-10 text-center transition-colors hover:border-neutral-400"
                >
                  <Upload className="h-8 w-8 text-neutral-400" />
                  <p className="font-grotesk md:tex-sm max-w-prose text-[12px] font-light text-neutral-300">
                    {selectedFile ? (
                      <span className="font-mono text-[12px] font-light text-neutral-200">
                        {getTruncatedName(selectedFile.name)}
                      </span>
                    ) : (
                      "Click to browse or drag a .gltf / .glb file here, max size 100MB"
                    )}
                  </p>
                  <input
                    id="model"
                    name={name}
                    ref={ref}
                    type="file"
                    accept=".gltf,.glb"
                    className="hidden"
                    onBlur={onBlur}
                    onChange={(event) => {
                      const files = event.target.files;
                      onChange(files);
                      if (files && files[0]) {
                        form.setValue("name", files[0].name, {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                </label>
              </FormControl>
              <FormMessage className={`font-grotesk text-red-500`} />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-2 self-center pt-10 sm:pt-16">
          <HoverBorderGradient>
            <div className="flex flex-row items-center gap-2 text-nowrap">
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="font-bebas text-sm tracking-wider text-neutral-50"
              >
                Upload
              </Button>
              <ArrowRight className="h-4 w-4 transition-all duration-300 hover:translate-x-1" />
            </div>
          </HoverBorderGradient>
        </div>
      </form>
    </Form>
  );
};

export default UploadForm;
