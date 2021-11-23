export type UtilitiesState = {
}

type NotificationType = "success" | "error" | "warning" | "info";
export type UtilitiesNotification = {
  message: string;
  description: string;
  type: NotificationType;
}