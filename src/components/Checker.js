import React, { useContext } from 'react';
import { StateContext } from '../App';

function Checker() {
    const state = useContext(StateContext);

  return (
    <div>
        <h2>{`Hi! My state from context is ${state}!`}</h2>
    </div>
  )
}

export default Checker