import type React from "react";
import { Button, Spinner } from "@components";
import { useState, useEffect } from "react";

interface Props {
  manufacturer: string;
  defaultMail?: string;
  onConfirm: (mail: string) => void;
  onReject: () => void;
  loading?: boolean;
}

const ApproveOrderModal: React.FC<Props> = ({
  onConfirm,
  onReject,
  manufacturer,
  defaultMail,
}) => {
  const [email, setEmail] = useState<string>(defaultMail || "");
  const [confirmClicked, setConfirmClicked] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              onClick={() => {
                onReject();
              }}
              disabled={confirmClicked}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                Manufacturing Request
              </h3>
              <p>
                The Design and your E-Mail will be sent to the Manufacturer{" "}
                <strong>{manufacturer}</strong>. Are you sure?
              </p>
              <form className="space-y-6 mt-4" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.currentTarget.value);
                    }}
                  />
                </div>
                <div className="flex items-center justify-end space-x-4">
                  <Button
                    variant={"secondary"}
                    onClick={() => {
                      onReject();
                    }}
                    disabled={confirmClicked}
                  >
                    Cancel
                  </Button>
                  <Button
                    icon={confirmClicked ? undefined : "ShoppingCartIcon"}
                    variant={"primary"}
                    disabled={!email || confirmClicked}
                    onClick={(e) => {
                      e.preventDefault();
                      setConfirmClicked(true);
                      onConfirm(email as string);
                    }}
                  >
                    {confirmClicked && (
                      <Spinner className={"!w-[1.5rem] !h-[1.5rem] !mx-4"} />
                    )}
                    Send Request
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ApproveOrderModal;
