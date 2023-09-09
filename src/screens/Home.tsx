import Button from "../components/Button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main
      className="h-[100vh] layout_container w-full flex flex-col justify-center items-start"
      style={{ backgroundImage: "url(https://res.cloudinary.com/dcp6fbxa9/image/upload/v1694271642/bg-image_rfvvud.svg)" }}
    >
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="pt-[50px] text-4xl sm:text-6xl sm:leading-[1.2] md:text-7xl xl:text-8xl text-white w-full lg:w-[90%] xl:w-[1000px] font-bold capitalize md:leading-[normal]">
          Unlock your knowledge potential
        </h1>
        <p className="text-white text-xl md:text-2xl lg:text-3xl mt-2">
          Join the ultimate quiz experience today
        </p>
        <Button
          href="/details"
          title="Start Quiz"
          className="mt-7 sm:mt-8 lg:mt-10 w-[160px]"
        />
      </motion.div>
    </main>
  );
};

export default Home;
