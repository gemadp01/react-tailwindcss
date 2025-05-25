import { cn } from "../lib/utils";

function Button({ children }) {
  const colors = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-300",
    danger: "bg-red-500 hover:bg-red-600 text-white shadow-red-300",
    secondary: "bg-gray-500 hover:bg-gray-600",
    success: "bg-green-500 hover:bg-green-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    info: "bg-indigo-500 hover:bg-indigo-600",
    light: "bg-white hover:bg-gray-100",
    dark: "bg-gray-800 hover:bg-gray-900",
  };

  return (
    <button
      className={cn(
        "py-2 px-4",
        "rounded",
        "shadow-xl hover:shadow-none",
        "font-semibold",
        "transition",
        colors.primary
      )}
    >
      {children}
    </button>
  );
}

export default Button;
