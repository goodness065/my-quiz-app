import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  href?: string;
  title?: string;
  className?: string;
  [x: string]: unknown;
  isLoading?: boolean;
  icon?: ReactNode;
  variant?: "green" | "white" | "red";
}

const Button = ({
  href,
  title,
  className,
  variant = "green",
  icon,
  ...props
}: ButtonProps) => {
  return href ? (
    <Link
      to={href}
      className={`py-[10px] px-[35px] rounded-lg text-lg font-medium !flex justify-center items-center ${
        variant === "green" ? "green-btn" : variant === "red" ? "red-btn" : "white-btn"
      } ${className}`}
      style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
    >
      {icon ? <span className={`${title && "mr-2"}`}>{icon}</span> : null}
      {title}
    </Link>
  ) : (
    <>
      <button
        className={`py-[10px] px-[35px] rounded-lg text-lg font-medium !flex justify-center items-center ${
          variant === "green" ? "green-btn" : variant === "red" ? "red-btn" : "white-btn"
        } ${className}`}
        style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
        {...props}
      >
        {icon ? <span className={`${title && "mr-2"}`}>{icon}</span> : null}
        {title}
      </button>
    </>
  );
};

export default Button;
