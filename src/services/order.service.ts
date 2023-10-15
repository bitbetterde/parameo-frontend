import { fetchAndHandleErrors } from "./util";

export interface IOrderData {
  session_id?: string;
  producer_id?: number;
}

interface OrderResult {
  checkout_url?: string;
  message?: string;
}

const orderService = {
  sendOrder: (data: IOrderData): Promise<OrderResult> => {
    return fetchAndHandleErrors("/order/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
export default orderService;
