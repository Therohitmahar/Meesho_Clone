// import React from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { delItem } from "../../redux/action";
// import { NavLink } from "react-router-dom";

// const Cart = () => {
//   const state = useSelector((state) => state.addItem);
//   const dispatch = useDispatch();

//   const handleClose = (item) => {
//     dispatch(delItem(item));
//   };

//   const cartItems = (cartItem) => {
//     return (
//       <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
//         <div className="container py-4">
//           <button
//             onClick={() => handleClose(cartItem)}
//             className="btn-close float-end"
//             aria-label="Close"
//           ></button>
//           <div className="row justify-content-center">
//             <div className="col-md-4">
//               <img
//                 src={cartItem.img}
//                 alt={cartItem.title}
//                 height="200px"
//                 width="180px"
//               />
//             </div>
//             <div className="col-md-4">
//               <h3>{cartItem.title}</h3>
//               <p className="lead fw-bold">${cartItem.price}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const emptyCart = () => {
//     return (
//       <div className="px-4 my-5 bg-light rounded-3 py-5">
//         <div className="container py-4">
//           <div className="row">
//             <h3>Your Cart is Empty</h3>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const button = () => {
//     return (
//       <div className="container">
//         <div className="row">
//           <NavLink
//             to="/checkout"
//             className="btn btn-outline-primary mb-5 w-25 mx-auto"
//           >
//             Proceed To checkout
//           </NavLink>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       {state.length === 0 && emptyCart()}
//       {state.length !== 0 && state.map(cartItems)}
//       {state.length !== 0 && button()}
//     </>
//   );
// };

// export default Cart;

import React from "react";
import SingleCart from "./SingleCart";
import TotalPrice from "./TotalPrice";
import "./cart.css";
import { InfoState } from "../../context/Context";
function Cart() {

  const { state: { cart } } = InfoState();

  return (<>
    {cart.length > 0 ? <div className="cart-page">
      <div className="left-cart">
        {cart.map((item) => {
          return <SingleCart key={Date.now} qty={item.qty} payload={item} image={item.image} title={item.title} price={item.price} />
        })}


      </div>
      <div className="right-cart">
        <TotalPrice ContinueTitle="Continue" continueTo={"address"} />
      </div>
    </div> : <div className="cart-page">
      <h1>

        Nothing In Cart
      </h1>
    </div>
    }
  </>
  );
}

export default Cart;
