import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/slices/dataSlice";
import { modalIsOpen } from "../redux/slices/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data}) => {
  console.log(data.id, "dt");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEdit = () => {
    dispatch(modalIsOpen());
    setOpenEdit(false);
    localStorage.setItem("productInfo", JSON.stringify(data));
    navigate(`/?update=${data?.id}`);
   };
  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md bg-indigo-800">
      <div className="border-b border-white flex items-center justify-center">
        <img src={data.url} alt="" className="w-[200px] h-[200px]  rounded-md p-5" />
      </div>
      <div className="absolute flex items-center justify-center gap-5 left-0 bottom-0 bg-indigo-600 text-white w-full px-4">
        <div className="text-ld font-semibold">{data?.name}</div>
        <div>{data?.price}TL</div>
      </div>
      <div className="absolute top-0 right-2 ">
        <BsThreeDots
          onClick={() => setOpenEdit(!openEdit)}
          color="white"
          size={24}
        />
      </div>
      {openEdit && (
        <div className="bg-red-200 border border-white text-dark rounded-md absolute top-5 right-2 p-2 text-sm">
          <div
            onClick={() => dispatch(deleteData(data?.id))}
            className="cursor-pointer"
          >
            Sil
          </div>
          <div onClick={handleEdit} className="cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
