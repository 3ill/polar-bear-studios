import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, FolderArchiveIcon, Upload } from "lucide-react";

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
import { zipFile } from "@/utils/zip";
import { useHandleUpload } from "@/features/upload/hooks/use-handle-upload";
import { getTruncatedName } from "@/utils/truncate";
import { useGetUserAssets } from "../hooks/use-get-user-assets";
import TextEffectWithExit from "@/shared/components/text-effect";
import { useNavigate } from "react-router-dom";

const UploadForm = ({ email }) => {
  const navigate = useNavigate();
  const { data } = useGetUserAssets(email);
  const { mutateAsync: handleUpload, isSubmitting } = useHandleUpload();

  const form = useForm({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      name: "",
      model: undefined,
    },
  });

  const fileList = form.watch("model");
  const selectedFile = fileList?.[0];
  console.log("asset data", data);

  const onSubmit = async (values) => {
    const file = values.model[0];
    const baseName = values.name.replace(/\.(gltf|glb)$/i, "");
    const zipName = `${baseName}.zip`;

    if (!email) {
      toast.error(`No email provided`, {
        description: (
          <ToastDescription
            description={"Kindly join the waitlist to upload models"}
          />
        ),
        style: {
          backgroundColor: "red",
          fontSize: "15px",
          fontFamily: "Space Grotesk",
          color: "#ffffff",
          fontWeight: "600",
        },
      });

      navigate("/#waitlist");
      return;
    }

    const uploadToastId = toast.loading(
      `Zipping and uploading ${values.name}...`,
      {
        style: {
          backgroundColor: "oklch(62.7% 0.194 149.214)",
          fontSize: "12px",
          fontFamily: "Space Grotesk",
          color: "#ffffff",
          fontWeight: "600",
        },
      }
    );

    try {
      const zippedBlob = await zipFile(file);
      const result = await handleUpload({
        file: zippedBlob,
        name: zipName,
        email,
      });

      toast.success(`${zipName} uploaded successfully!`, {
        id: uploadToastId,
        icon: <ToastIcon />,
        description: (
          <ToastDescription description={`File URL: ${result.vercel.url}`} />
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
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(`Failed to upload ${values.name}`, {
        id: uploadToastId,
        description: (
          <ToastDescription
            description={error.message || "An error occurred"}
          />
        ),
        style: {
          backgroundColor: "red",
          fontSize: "15px",
          fontFamily: "Space Grotesk",
          color: "#ffffff",
          fontWeight: "600",
        },
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="c-space motion-preset-expand motion-duration-800 relative z-10 flex w-full max-w-xl flex-col items-center justify-center gap-5 rounded-[15px] bg-neutral-900/50 py-10 shadow-lg backdrop-blur-md sm:py-20 lg:gap-8"
      >
        <div className="relative flex flex-row self-end">
          <FolderArchiveIcon className="h-6 w-6 text-neutral-400" />
          <div className="absolute -top-2.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-700 p-1 text-[10px] font-bold text-neutral-50">
            {data?.assetLength || 0}
          </div>
        </div>

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
                      "Click to browse or drag a .gltf / .glb file here, max size 100MB, max 5 files per user"
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
                        const currentName = form.getValues("name");
                        if (!currentName || currentName.trim() === "") {
                          form.setValue("name", files[0].name, {
                            shouldValidate: true,
                          });
                        }
                      }
                    }}
                  />
                </label>
              </FormControl>
              <FormMessage className={`font-grotesk text-red-500`} />
            </FormItem>
          )}
        />

        {isSubmitting && (
          <div className="flex self-center">
            <TextEffectWithExit
              text="Uploading asset, please wait ..."
              style="text-sm tracking-wider font-bold text-neutral-50 max-w-prose"
            />
          </div>
        )}

        <div className="flex items-center gap-2 self-center pt-10 sm:pt-16">
          <HoverBorderGradient
            disabled={!selectedFile || data?.assetLength >= 5}
          >
            <button
              type="submit"
              className="flex flex-row items-center gap-2 text-nowrap"
            >
              <p className="font-bebas text-sm tracking-wider text-neutral-50">
                Upload
              </p>
              <ArrowRight className="h-4 w-4 transition-all duration-300 hover:translate-x-1" />
            </button>
          </HoverBorderGradient>
        </div>
      </form>
    </Form>
  );
};

export default UploadForm;
