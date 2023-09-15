import { fetchAndHandleErrors } from "./util";

export interface IEmailData {
  content: string;
  sender_email: string;
  sender_name: string;
  sender_phone?: string;
}

const emailService = {
  sendEmail: async (data: IEmailData): Promise<void> => {
    await fetchAndHandleErrors("/email/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
export default emailService;
