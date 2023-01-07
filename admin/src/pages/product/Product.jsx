import { useLocation } from "react-router-dom";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";

import { updateProduct } from "../../redux/apiCalls";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const handleClick = (e) => {
    e.preventDefault();

    var form = document.getElementById("EditForm");
    var chk_status = form.checkValidity();
    form.reportValidity();
    if (chk_status) {
      const name = form.elements[0].value;
      const des = form.elements[1].value;
      const price = form.elements[2].value;
      const idStock = form.elements[3].value;

      const newProduct = {
        title: name,
        description: des,
        price,
        inStock: idStock,
      };

      dispatch(updateProduct(productId, newProduct));
    }
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      </div>
      <div className="productTop">
        <div className="productTopLeft"></div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.image} alt="" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm" id="EditForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} id="name" required />
            <label>Product Desc</label>
            <input type="text" placeholder={product.desc} id="des" required />
            <label>Product Price</label>
            <input
              type="number"
              placeholder={product.price}
              id="price"
              step="0.1"
              required
            />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.image} alt="" />
            </div>
            <button
              type="submit"
              form="EditForm"
              onClick={handleClick}
              className="productButton"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
