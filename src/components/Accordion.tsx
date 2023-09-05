import { Icon } from "@components";
import { LinkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";

interface AccordionProps {
  className?: string;
  title: string;
  isOpen?: boolean;
  children?: React.ReactNode;
  onClickLinkIcon?: (id?: string) => void;
  id?: string;
  icon?: string;
  isProse?: boolean;
}

const Accordion = forwardRef<HTMLDetailsElement, AccordionProps>(
  (
    {
      className,
      children,
      title,
      isOpen = false,
      onClickLinkIcon,
      id,
      icon,
      isProse = true,
    },
    ref
  ) => {
    return (
      <details
        className={`mx-auto max-w-7xl border-b border-gray-200 p-6 group text-gray-400 open:text-black ${
          className || ""
        } hover:text-black`}
        open={isOpen}
        ref={ref}
      >
        <summary className="flex justify-between items-center cursor-pointer">
          {onClickLinkIcon && (
            <button onClick={() => onClickLinkIcon(id)}>
              <LinkIcon className="w-[18px] text-gray-400 mr-7 cursor-pointer hover:text-black active:text-indigo-600" />
            </button>
          )}
          {icon && (
            <Icon
              className="w-[18px] text-gray-400 mr-7"
              name={icon}
              variant="outline"
            />
          )}
          <h4 className="inline w-full cursor-pointer text-lg font-medium text-inherit">
            {title}
          </h4>
          <div className="transition-transform ease-in duration-100 rotate-0 group-open:rotate-180">
            <ChevronDownIcon className="w-5 text-gray-400" />
          </div>
        </summary>
        <div
          className={`py-6 ${
            isProse
              ? "prose prose-headings:text-xl text-lg prose-p:text-gray-500 max-w-none"
              : ""
          } text-gray-900`}
        >
          {children}
        </div>
      </details>
    );
  }
);

export default Accordion;
