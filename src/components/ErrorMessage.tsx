import { AppLayoutProps } from "./app-layout/AppLayout";
import { motion } from "framer-motion";

const ErrorMessage = ({ children }: AppLayoutProps) => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="error w-full p-2 my-2 rounded bg-[#ff0033] text-center text-white capitalize"
    >
      {children}
    </motion.div>
  );
};

export default ErrorMessage;
