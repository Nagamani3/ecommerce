// import React, { Fragment } from "react";
// import CurrencyFormat from "react-currency-format";
// import CheckOut from "../CheckOut/CheckOut";

// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { GetBasketTotal } from "../CheckOut/GetBasketTotal";
// import { useHistory } from "react-router-dom";

// import { Link } from "react-router-dom";

// const Payment = () => {
//   const { basket, user } = useSelector(state => state.basketReducer);
//   const handleSubmit = e => {
//     e.preventDefault();
//   };
//   return (
//     <div className="">
//       <div className="">
//         <h1 className="">
//           Check {<Link to="/check">{basket.length} items</Link>}
//         </h1>
//         <div>
//           <div>
//             <h3>Delivery Address</h3>
//           </div>
//           <div>
//             <p>{user && user.email}</p>
//             <p>House no.230 Near Botanical Garden</p>
//             <p>Lucknow,India</p>
//           </div>
//         </div>
//         <div>
//           <div>
//             <h3>Review Items and Delivery</h3>
//           </div>
//           <div>
//             {basket &&
//               basket.map(item => (
//                 <CheckOut
//                   id={item.id}
//                   title={item.title}
//                   image={item.image}
//                   price={item.price}
//                   rating={item.rating}
//                 />
//               ))}
//           </div>
//         </div>
//         <div>
//           <div>
//             <h3>Payment Method</h3>
//           </div>
//           <div>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <CurrencyFormat
//                   renderText={value => (
//                     <Fragment>
//                       <h3>Order Total :{value}</h3>
//                     </Fragment>
//                   )}
//                   decimalScale={2}
//                   value={GetBasketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"Rs"}
//                 />
//                 <button>
//                   <span>Buy Now</span>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;import React, { Fragment } from "react";
// import CurrencyFormat from "react-currency-format";
// import CheckOut from "../CheckOut/CheckOut";

// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { GetBasketTotal } from "../CheckOut/GetBasketTotal";
// import { useHistory } from "react-router-dom";

// import { Link } from "react-router-dom";

// const Payment = () => {
//   const { basket, user } = useSelector(state => state.basketReducer);
//   const handleSubmit = e => {
//     e.preventDefault();
//   };
//   return (
//     <div className="">
//       <div className="">
//         <h1 className="">
//           Check {<Link to="/check">{basket.length} items</Link>}
//         </h1>
//         <div>
//           <div>
//             <h3>Delivery Address</h3>
//           </div>
//           <div>
//             <p>{user && user.email}</p>
//             <p>House no.230 Near Botanical Garden</p>
//             <p>Lucknow,India</p>
//           </div>
//         </div>
//         <div>
//           <div>
//             <h3>Review Items and Delivery</h3>
//           </div>
//           <div>
//             {basket &&
//               basket.map(item => (
//                 <CheckOut
//                   id={item.id}
//                   title={item.title}
//                   image={item.image}
//                   price={item.price}
//                   rating={item.rating}
//                 />
//               ))}
//           </div>
//         </div>
//         <div>
//           <div>
//             <h3>Payment Method</h3>
//           </div>
//           <div>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <CurrencyFormat
//                   renderText={value => (
//                     <Fragment>
//                       <h3>Order Total :{value}</h3>
//                     </Fragment>
//                   )}
//                   decimalScale={2}
//                   value={GetBasketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"Rs"}
//                 />
//                 <button>
//                   <span>Buy Now</span>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

 
 








