import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { iceCreamOrdered, iceCreamRestocked } from "./iceCreamSlice";

export const IceCream = () => {
  const [ordered, setOrdered] = useState(1)
  const [restocked, setRestocked] = useState(1)
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  const numberOfCones = useSelector((state) => state.iceCream.numberOfCones);
  const dispatch = useDispatch()
  return (
    <main>
      <section className="button-wrapper">
        <h2>Number of Ice Cream : {numberOfIceCream} </h2>
        <h2>Number of Cones : {numberOfCones} </h2>
      </section>

      <section className="button-wrapper">
        <button onClick={() => dispatch(iceCreamOrdered(ordered))}>Order Ice Cream: </button>
        <input type="number" value={ordered} onChange={(e) => setOrdered(parseInt(e.target.value))} />
        <button onClick={() => dispatch(iceCreamRestocked(restocked))}>Restock Ice Cream: </button>
        <input type="number" value={restocked} onChange={(e) => setRestocked(parseInt(e.target.value))}/>
      </section>
    </main>
  );
};
