import { AppLayoutProps } from "./app-layout/AppLayout";

const ErrorMessage = ({ children }: AppLayoutProps) => {
  return (
    <div
      className="error w-full p-2 my-2 rounded bg-[#ff0033] text-center text-white capitalize"
    >
      {children}
    </div>
  );
};
  
  export default ErrorMessage;