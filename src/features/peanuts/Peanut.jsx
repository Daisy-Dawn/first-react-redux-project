import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { peanutOrdered, peanutRestocked } from "./peanutSlice";

export const Peanut = () => {
  const numberOfPeanuts = useSelector((state) => state.peanut.numberOfPeanuts);
  const numberOfRibbons = useSelector((state) => state.peanut.numberOfRibbons);
  const dispatch = useDispatch()
  return (
    <main>
      <section className="button-wrapper">
        <h2>Number of Peanut - {numberOfPeanuts} </h2>
        <h2>Number of Ribbons - {numberOfRibbons} </h2>
      </section>

      <section className="button-wrapper">
        <button onClick={() => dispatch(peanutOrdered(3))}>Order Peanut </button>
        <button onClick={() => dispatch(peanutRestocked(5))}>Restock Peanut </button>
        {/* <input type="number" value={} /> */}
      </section>
    </main>
  );
};
