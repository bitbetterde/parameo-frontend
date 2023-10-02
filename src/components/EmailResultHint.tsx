import type React from "react";
import { Button, Icon, Spinner, TextInput } from "@components";
import { useState } from "react";
import { emailService } from "@services";
import { useSessionStore } from "@stores";

interface Props {
  className?: string;
  sessionId?: string;
}

type ButtonState = "default" | "busy" | "success";

const EmailResultHint: React.FC<Props> = ({ className, sessionId }) => {
  const [email, setEmail] = useState<string>("");
  const [buttonState, setButtonState] = useState<ButtonState>(
    "default" as const
  );

  const updateMail = useSessionStore((state) => state.updateMailSession);

  const buttonContent = {
    busy: (
      <Button disabled>
        <Spinner className={"!w-[1.5rem] !h-[1.5rem] !mx-10"} />
      </Button>
    ),
    success: (
      <Button
        type="submit"
        disabled
        className="disabled:!bg-indigo-600"
        icon="CheckCircleIcon"
      >
        E-Mail sent successfully
      </Button>
    ),
    default: (
      <Button type="submit" icon="EnvelopeIcon">
        Send me the link
      </Button>
    ),
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonState("busy" as const);
    try {
      await updateMail(email);
      await emailService.sendEmail({
        type: "session_link",
        session_id: sessionId,
        content: "content",
        user_email: email,
        user_name: "name",
      });
    } finally {
      setButtonState("default" as const);
    }
    setButtonState("success" as const);
  };
  return (
    <div className={`flex gap-4 flex-col ${className || ""}`}>
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0">
          <Icon
            name="InformationCircleIcon"
            variant="outline"
            className="text-green-400 w-6 h-6"
          />
        </div>
        <h4 className="text-base font-medium text-gray-900">
          Access your design anytime
        </h4>
      </div>
      <p className="text-gray-500">
        Your email address will only be used to send you the link to access your
        design at any time. Otherwise make sure to copy the unique URL of this
        tab before closing it.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <TextInput
          name="email"
          type="email"
          required
          disabled={buttonState === "busy"}
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            if (buttonState !== "default") {
              setButtonState("default" as const);
            }
            setEmail(e.target.value);
          }}
        />
        {buttonContent[buttonState]}
      </form>
    </div>
  );
};

export default EmailResultHint;
