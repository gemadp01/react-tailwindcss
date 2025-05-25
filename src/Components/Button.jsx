import { cn } from "../lib/utils";

function buttonStyle(color, size) {
  const base = "shadow-xl hover:shadow-none font-semibold rounded";

  const variants = {
    color: {
      primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-300",
      danger: "bg-red-500 hover:bg-red-600 text-white shadow-red-300",
      secondary: "bg-gray-500 hover:bg-gray-600",
      success: "bg-green-500 hover:bg-green-600",
      warning: "bg-yellow-500 hover:bg-yellow-600",
      info: "bg-indigo-500 hover:bg-indigo-600",
      light: "bg-white hover:bg-gray-100",
      dark: "bg-gray-800 hover:bg-gray-900",
    },
    size: {
      small: "py-1 px-2",
      medium: "py-2 px-4",
      large: "py-3 px-6",
      xlarge: "py-4 px-8",
    },
  };

  return cn(base, variants.color[color], variants.size[size]);
}

function Button({ children, color, size }) {
  return <button className={buttonStyle(color, size)}>{children}</button>;
}

Button.defaultProps = {
  color: "primary",
  size: "medium",
};

export default Button;
