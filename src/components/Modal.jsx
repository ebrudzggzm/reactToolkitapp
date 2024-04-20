import { AiFillCloseCircle } from "react-icons/ai";
import { modalIsOpen } from "../redux/slices/modalSlice";
import { useDispatch } from "react-redux";

const Modal = ({ title, content, btnText, btnFunc }) => {

  const dispatch = useDispatch();

 
  return (
    <div className=" fixed top-0 left-0 right-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="text-2xl">{title}</div>
          <AiFillCloseCircle
            size={24}
            onClick={() => dispatch(modalIsOpen())}
          />
        </div>
        <div>
       {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
