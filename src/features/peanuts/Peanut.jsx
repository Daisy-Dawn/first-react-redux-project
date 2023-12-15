import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { peanutOrdered, peanutRestocked } from "./peanutSlice";

export const Peanut = () => {
  const [ordered, setOrdered] = useState(1)
  const [restocked, setRestocked] = useState(1)
  const numberOfPeanuts = useSelector((state) => state.peanut.numberOfPeanuts);
  const numberOfRibbons = useSelector((state) => state.peanut.numberOfRibbons);
  const dispatch = useDispatch()
  return (
    <main>
      <section className="button-wrapper">
        <h2>Number of Peanut : {numberOfPeanuts} </h2>
        <h2>Number of Ribbons : {numberOfRibbons} </h2>
      </section>

      <section className="button-wrapper">
        <button onClick={() => dispatch(peanutOrdered(ordered))}>Order Peanut </button>
        <input type="number" value={ordered} onChange={(e) => setOrdered(parseInt(e.target.value))} />
        <button onClick={() => dispatch(peanutRestocked(restocked))}>Restock Peanut </button>
        <input type="number" value={restocked} onChange={(e) => setRestocked(parseInt(e.target.value))} />
      </section>
    </main>
  );
};
