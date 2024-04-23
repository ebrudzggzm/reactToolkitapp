import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { modalIsOpen } from "../redux/slices/modalSlice";
import Input from "../components/Input";
import Button from "../components/Button";
import { createData, updateData } from "../redux/slices/dataSlice";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useLocation, useNavigate, useParams} from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";


const Product = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const { modal } = useSelector((store) => store.modalReducer);

  const { isLoading, error, data, keyword } = useSelector(
    (store) => store.dataReducer
  );
  console.log(data,keyword, "key");
  const location = useLocation();
  
  const [productInfo, setProductInfo] = useState("productInfo", {
    name: "",
    price: "",
    url: "",
  });

 
  let loc = location.search.split("=")[1];
  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((data) => data.id === loc));
    }
  }, [loc]);

  //console.log(location.search.split("=")[1], "loc");
  console.log(location.key, "loc");
  const onChangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const buttonFunc = () => {
    let newId = 1;
    if (data && data.length > 0) {
      newId = data.length + 1;
    }
    dispatch(createData({ ...productInfo, id: newId }));
    dispatch(modalIsOpen());
  };

  const buttonUpdateFunc = () => {
    dispatch(modalIsOpen());
    dispatch(updateData({ ...productInfo, id:loc}));
  
    navigate("/");
    setProductInfo({
      name: "",
      price: "",
      url: ""
    });
  };
 
  const modalContent = (
    <>
      <Input
        type={"text"}
        placeholder={"Ürün Ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
        defaultValue={loc ? productInfo?.name: ''}

      />
      <Input
        type={"text"}
        placeholder={"Fiyat Ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
        defaultValue={loc ? productInfo?.price : ''}
      />
      <Input
        type="file"
        placeholder={"Resim Seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button
        onClick={loc ? buttonUpdateFunc : buttonFunc}
        btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
      />
    </>
  );
  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(keyword)
  );

  return (
    <div>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <div className="flex items-center flex-wrap">
            {data !== null &&
              filteredItems?.map((i, index) => (
                <ProductCard key={index} data={i} />
              ))}
          </div>
        )}
      </div>

      {modal ? (
        <Modal
          
          title={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
          content={modalContent}
        />
      ) : null}
    
    </div>
  );
};

export default Product;
