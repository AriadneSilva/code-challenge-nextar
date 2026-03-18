import { useState } from "react";

type ToastType = "success" | "error";

export function useToast() {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

  function showToast(message: string, type: ToastType = "success") {
    setToast({ message, type });
  }

  function hideToast() {
    setToast(null);
  }

  return {
    toast,
    showToast,
    hideToast,
  };
}
