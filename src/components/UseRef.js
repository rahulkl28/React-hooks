import React, {useRef, useState, useEffect} from 'react'

function UseRef() {
//   const myRef = useRef(null);

//   useEffect(() => {
//     const myElement = myRef.current;
  
//     if(myElement) {
//       myElement.focus();
//     }
//   }, [])

const [inputValue, setInputValue] = useState('');
const previousVal = useRef('');

useEffect(() => {
  previousVal.current = inputValue;
}, [inputValue]);

    

  return (
    <div>
        {/* <input ref={myRef} type="text"/> */}

        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <h3>Current Value: {inputValue}</h3>
        <h3>Previous Value: {previousVal.current}</h3>
       
    </div>
  )
}

export default UseRef