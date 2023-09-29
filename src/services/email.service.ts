import { fetchAndHandleErrors } from "./util";

export interface IEmailData {
  type: "session_link" | "contact" | "order";
  content?: string;
  sender_email?: string;
  sender_name?: string;
  sender_phone?: string;
  session_id?: string;
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
