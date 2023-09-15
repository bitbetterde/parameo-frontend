import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { INotification } from "@interfaces";

interface NotificationStore {
  notificationData?: INotification;
  showNotification: boolean;
  setNotificationData: (data: INotification | undefined) => void;
  closeNotification: () => void;
}

const useNotificationStore = create<NotificationStore>()(
  devtools((set) => ({
    notificationData: undefined,
    showNotification: false,
    closeNotification: () => {
      set((state) => ({
        ...state,
        showNotification: false,
      }));
      setTimeout(() => {
        set((state) => ({
          ...state,
          notificationData: undefined,
        }));
      }, 300);
    },
    setNotificationData: (data) => {
      if (data) {
        set((state) => ({
          ...state,
          notificationData: data,
          showNotification: true,
        }));
      } else {
        set((state) => ({
          ...state,
          notificationData: data,
          showNotification: false,
        }));
      }
    },
  }))
);

export default useNotificationStore;
