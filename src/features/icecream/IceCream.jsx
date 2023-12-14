import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { iceCreamOrdered, iceCreamRestocked } from "./iceCreamSlice";

export const IceCream = () => {
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  const numberOfCones = useSelector((state) => state.iceCream.numberOfCones);
  const dispatch = useDispatch()
  return (
    <main>
      <section className="button-wrapper">
        <h2>Number of Ice Cream - {numberOfIceCream} </h2>
        <h2>Number of Cones - {numberOfCones} </h2>
      </section>

      <section className="button-wrapper">
        <button onClick={() => dispatch(iceCreamOrdered())}>Order Ice Cream: </button>
        <button onClick={() => dispatch(iceCreamRestocked(3))}>Restock Ice Cream: </button>
      </section>
    </main>
  );
};
