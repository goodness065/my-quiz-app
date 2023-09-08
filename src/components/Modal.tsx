import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "./Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 8,
  p: 4,
};

interface IModal {
  open: boolean;
  handleClose: () => void;
  handleOnclick: () => void;
  title: string;
}

const QuizModal = ({ open, handleClose, title, handleOnclick }: IModal) => {

  return (
    <div className="custom__modal__container">
      <Modal open={open} onClose={handleClose}>
          <Box sx={style} className="!w-[90%] sm:!w-[80%] md:!w-[500px]">
            <h1 className="text-[#1F1F1F] text-xl font-bold text-center">
              {title}
            </h1>
            <div className="flex w-full justify-around mt-5">
              <Button variant="green" title="No" onClick={handleClose} />
              <Button
                title="Yes"
                variant="red"
                onClick={handleOnclick}
              />
            </div>
          </Box>
      </Modal>
    </div>
  );
};

export default QuizModal;
