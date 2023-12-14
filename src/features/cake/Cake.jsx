import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const Cake = () => {
  const numbOfCakes = useSelector(state => state.cake.numberOfCakes)
  const dispatch = useDispatch()
  return (
    <main>
        <h2>Number of Cakes - {numbOfCakes} </h2>
        <section className="button-wrapper">
        <button onClick={() => dispatch(ordered())}>Order Cake: </button>
        <button onClick={() => dispatch(restocked(4))}>Restock Cake: </button>
        <input type="number" name="cake" id="" />
        </section>
        
    </main>
  )
}
