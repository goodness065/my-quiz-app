import { AppLayoutProps } from "./app-layout/AppLayout";
import { motion } from "framer-motion";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ErrorMessage = ({ children }: AppLayoutProps) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 5 }}
      className="error w-full p-2 my-2 rounded bg-[#ff0033] text-center text-white capitalize"
    >
      {children}
    </motion.div>
  );
};

export default ErrorMessage;
