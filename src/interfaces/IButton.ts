export interface IButton {
  target: string;
  variant?: "primary" | "white" | "transparent" | "secondary";
  children: React.ReactNode;
}
