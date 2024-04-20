import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { modalIsOpen } from "../redux/slices/modalSlice";
import { searchData, sortingData } from "../redux/slices/dataSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex item-center justify-between bg-indigo-600 text-white px-4 py-4">
      <div className="text-3xl">React Uygulama</div>
      <div className=" flex items-center gap-5">
        <div className="text-black">
          <select
            name=""
            id=""
            className="h-10 rounded-lg"
            onChange={(e) => dispatch(sortingData(e.target.value))}
          >
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <div className="">
          <input
            className="h-10 rounded-lg px-4 text-black"
            type="text"
            placeholder="Ara..."
            onChange={(e) => dispatch(searchData(e.target.value))}
          />
        </div>
        <div
          onClick={() => dispatch(modalIsOpen())}
          className="bg-indigo-800 w-20 h-20 flex items-center justify-center rounded-full cursor-pointer"
        >
          <IoIosAddCircle size={48} />
        </div>
      </div>
    </div>
  );
};

export default Header;
