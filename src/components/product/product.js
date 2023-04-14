import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import addCart from "../../redux/action";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./product.css";

const Product = () => {
  let { Id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const respornse = await fetch(`https://fakestoreapi.com/products/${Id}`);
      setProduct(await respornse.json());
      setLoading(false);
    };

    getProduct();
  }, []);
  const LoadingCompo = () => {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="product-page">
        <div className="left-side">
          <div className="image-holder  product-border">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="button-holder">
            <button
              className="btn addToCart"
              onClick={() => addProduct(product)}
            >
              <ShoppingCartIcon />
              Add to Cart
            </button>
            <button className="btn buybtn">
              <KeyboardDoubleArrowRightIcon />
              Buy Now
            </button>
          </div>
        </div>
        <div className="right-side">
          <div className="Product-title product-border">
            <h4>{product.title}</h4>
            <h2>₹{product.price}</h2>
            <div>
              <span className="rating spark star">
                {product.rating && product.rating.rate}
                <StarIcon />
              </span>

              <span>/ {product.rating && product.rating.count}Reviews</span>
              <br />
              <span className="free-delivery">Free Delivery</span>
            </div>
          </div>
          <div className="product-size  product-border">
            <h3>Select Size</h3>
            <button className="free-size">Free Size</button>
          </div>
          <div className="more-details product-border">
            <h2>Product Details</h2>
            <p>Name : {product.title}</p>
            <p>Net Quantity (N) : 1</p>
            <p>Description : {product.description}</p>

            <p className="more-info">More Information</p>
          </div>
        </div>
      </div>
    );
  };
  return <>{loading ? <LoadingCompo /> : <ShowProduct />}</>;
};

export default Product;
