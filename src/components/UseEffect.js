import React from 'react'
import { useState,useEffect } from "react";
function UseEffect() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');

    //runs on every render

    // useEffect(() => {
    //   setTimeout(() => {
    //     setCount((count) => count + 1);
    //   }, 1000);
    // });

    //runs on first render

    // useEffect(() => {
    //     setTimeout(() => {
    //       setCount((count) => count + 1);
    //     }, 1000);
    //   }, []);

    const handleChange = (e) => {
        setData(e.target.value)
      }
    
      useEffect(() => {
        return ()=>{setCount((count) => count + 1)};
      }, [data]);

  return (
    <div>
        {/* <h1>I have rendered {count} times!</h1> */}
        <input onChange={handleChange} value={data} />
      <p>{count}</p>
    </div>
  )
}

export default UseEffect