import { TextInput, ButtonLink } from "@components";
import type React from "react";

interface Props {
  className?: string;
}

const ContactForm: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-base font-semibold text-indigo-600 uppercase text-center py-12">
        Contact
      </h2>
      <div className="flex flex-col gap-6">
        <TextInput name="name" placeholder="Full name" />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="block w-full rounded-md h-[50px] px-[21px] py-[13px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-500 font-normal text-base"
        />
        <input
          type="tel"
          id="phone-number"
          name="phone-number"
          placeholder="Phone number"
          className="block w-full rounded-md h-[50px] px-[21px] py-[13px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-500 font-normal text-base"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={5}
          className="block w-full rounded-md px-[21px] py-[13px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-500 font-normal text-base"
        />
        <ButtonLink
          target="#"
          variant="primary"
          caption="Submit"
          className="w-28 py-3 text-center text-base font-medium"
        />
      </div>
    </div>
  );
};

export default ContactForm;
