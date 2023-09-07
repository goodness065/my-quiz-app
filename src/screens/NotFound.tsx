import Button from "../components/Button";

const NotFound = () => {
  return (
    <main className="h-[100vh] bg-[#F9F9F9] layout_container w-full flex justify-center items-center">
      <div className="w-full mt-14 md:w-[75%] lg:w-[50%] p-5 flex flex-col items-center font-light bg-white sm:p-8 rounded-lg">
        <h1 className="text-6xl sm:text-8xl font-black text-center flex justify-center items-center">
          <span className="text-[#1F1F1F]">4</span>
          <span className="text-[#53B03A]">0</span>
          <span className="text-[#1F1F1F]">4</span>
        </h1>
        <p className="text-[#1F1F1F] text-base mb-5 text-center">
          THIS PAGE YOU REQUESTED CAN NOT BE FOUND.
        </p>

        <Button title="Go home" href="/" />
      </div>
    </main>
  );
};

export default NotFound;
