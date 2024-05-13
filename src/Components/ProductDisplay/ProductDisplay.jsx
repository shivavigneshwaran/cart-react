import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  console.log("product", product);
  return (
    <div className="Productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="product_img" />
          <img src={product.image} alt="product_img" />
          <img src={product.image} alt="product_img" />
          <img src={product.image} alt="product_img" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productimage-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_dull_icon} alt="star_dull_icon" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
            ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
            ${product.new_price}
            </div>
        </div>
        
        <div className="productdisplay-right-discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet
          optio, quis enim officia iusto perferendis. Nisi dolorum quaerat nemo
          eaque, nostrum enim ea necessitatibus soluta magni dolorem ipsum
          explicabo!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>Add to Cart</button>
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
