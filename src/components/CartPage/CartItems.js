import React, { Fragment } from "react";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaTrash
} from "react-icons/fa";
const CartItems = ({ cartItem, increment, decrement, removeItem }) => {
  const { id, title, price, ProductCount, total, image } = cartItem;
  return (
    <Fragment>
      <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
        {/* image */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <img src={image} alt="foto" width="60" className="img-fluid" />
        </div>
        {/* end of image */}
        {/* title */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <span className="d-lg-none">product: </span>
          {title}
        </div>
        {/* end of title */}
        {/* price */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <span className="d-lg-none">price: Rs </span>
          {price}
        </div>
        {/* end of price */}
        {/* count contorl */}
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <FaChevronCircleDown
                className="cart-icon text-primary"
                onClick={() => {
                  decrement(id);
                }}
              />
              <span className="text-title text-muted mx-3">{ProductCount}</span>
              <FaChevronCircleUp
                className="cart-icon text-primary"
                onClick={() => {
                  increment(id);
                }}
              />
            </div>
          </div>
        </div>
        {/* end of count contorl */}
        {/* delete */}
        <div className="col-10 mx-auto col-lg-2">
          <FaTrash
            className="cart-icon text-danger"
            onClick={() => {
              removeItem(id);
            }}
          />
        </div>
        {/* end of delete */}
        {/* total */}
        <div className="col-10 mx-auto col-lg-2">
          <strong className="text-muted">item total: Rs{total}</strong>
        </div>
        {/* end of total */}
      </div>
    </Fragment>
  );
};

export default CartItems;
