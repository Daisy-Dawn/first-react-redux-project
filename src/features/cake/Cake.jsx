import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const Cake = () => {
  const [cakeRestocke, setCakeRestocke] = useState(1);
  const [cakeOrdered, setCakeOrdered] = useState(1);
  const numbOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <main>
      <h2>Number of Cakes : {numbOfCakes} </h2>
      <section className="button-wrapper">
        <button onClick={() => dispatch(ordered(cakeOrdered))}>
          Order Cake:
        </button>
        <input
          value={cakeOrdered}
          onChange={(e) => setCakeOrdered(parseInt(e.target.value))}
          type="number"
        />
        <button onClick={() => dispatch(restocked(cakeRestocke))}>
          Restock Cake:
        </button>
        <input
          value={cakeRestocke}
          onChange={(e) => setCakeRestocke(parseInt(e.target.value))}
          type="number"
        />
      </section>
    </main>
  );
};
