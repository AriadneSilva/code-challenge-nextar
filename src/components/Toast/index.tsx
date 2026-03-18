import { useEffect } from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
  duration?: number;
};

export function Toast({
  message,
  type = "success",
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const baseStyles =
    "fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white z-50 transition-all animate-slide-in";

  const typeStyles = type === "success" ? "bg-green-600" : "bg-red-600";

  return <div className={`${baseStyles} ${typeStyles}`}>{message}</div>;
}
