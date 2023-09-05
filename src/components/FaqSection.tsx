import { FaqEntry } from "@components";
import type { IFaqFile } from "@interfaces";
import type React from "react";

interface Props {
  title: string;
  className?: string;
  data: Array<IFaqFile>;
}

const FaqSection: React.FC<Props> = ({ title, className, data }) => {
  return (
    <div
      className={`bg-white px-6 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-12 ${
        className || ""
      }`}
    >
      <div className="relative mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <div className="flex justify-center">
            <h2 className="lg:w-1/2 lg:px-12 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
          </div>
          <SubscriptionBar
            subscriptionCta="Drop us your email and get updates on parameo"
            label="Enter your email"
            buttonCta="Stay in touch"
          />
        </div>
        <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 ">
          {data?.map((data, i) => (
            <FaqEntry data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SuscriptionProps {
  className?: string;
  subscriptionCta: string;
  label: string;
  buttonCta: string;
}

const SubscriptionBar: React.FC<SuscriptionProps> = ({
  className,
  subscriptionCta,
  label,
  buttonCta,
}) => {
  return (
    <div
      className={`mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5 ${
        className || ""
      }`}
    >
      <p className="text-xl font-normal text-gray-500 text-center md:text-left">
        {subscriptionCta}
      </p>
      <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
        <div>
          <label htmlFor="email-address" className="sr-only">
            {label}
          </label>
          <input
            id="email-address"
            name="email-address"
            type="email"
            autoComplete="email"
            required
            className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 lg:max-w-xs"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-2 flex w-full flex-shrink-0 rounded-md shadow-sm sm:ml-3 sm:mt-0 sm:inline-flex sm:w-auto">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:inline-flex sm:w-auto"
          >
            {buttonCta}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FaqSection;
