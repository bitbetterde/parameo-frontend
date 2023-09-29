import { TextInput, Button, Spinner } from "@components";
import type React from "react";
import { useForm } from "react-hook-form";
import { emailService } from "@services";
import type { IEmailData } from "@services/email.service";
import { useState } from "react";

interface Props {
  className?: string;
}

const ContactForm: React.FC<Props> = ({ className }) => {
  const { register, handleSubmit, formState } = useForm<IEmailData>();
  const [isBusy, setIsBusy] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: IEmailData) => {
    setIsBusy(true);
    try {
      await emailService.sendEmail({ ...data, type: "contact" });
    } finally {
      setIsBusy(false);
    }
    setSuccess(true);
  };

  let buttonContent;
  if (isBusy) {
    buttonContent = <Spinner className={"!w-[1.5rem] !h-[1.5rem] !mx-10"} />;
  } else {
    if (success) {
      buttonContent = "E-Mail sent successfully";
    } else {
      buttonContent = <span className="mx-4">Submit</span>;
    }
  }

  return (
    <div className={className}>
      <h2 className="text-base font-semibold text-indigo-600 uppercase text-center py-12">
        Contact
      </h2>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          placeholder="Full name *"
          {...register("sender_name", { required: true })}
          required
        />
        <input
          type="email"
          id="sender_email"
          placeholder="Your Email *"
          className="block w-full rounded-md h-[50px] px-[21px] py-[13px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-500 font-normal text-base"
          {...register("sender_email", { required: true })}
          required
        />
        <input
          type="tel"
          id="phone-number"
          placeholder="Phone number"
          className="block w-full rounded-md h-[50px] px-[21px] py-[13px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-500 font-normal text-base"
          {...register("sender_phone")}
        />
        <textarea
          id="content"
          placeholder="Message *"
          rows={5}
          className="block w-full rounded-md px-[21px] py-[13px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-500 font-normal text-base"
          {...register("content", { required: true })}
          required
        />
        <Button
          {...(success ? { iconRight: "CheckIcon" } : {})}
          variant={success ? "success" : "primary"}
          className="w-fit text-base font-medium"
          disabled={isBusy || success || !formState?.isValid}
        >
          {buttonContent}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
