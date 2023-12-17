import React, {useState, useCallback} from 'react'

function ChildComponent({onClick}) {
    console.log('childComponent renders');
    return(
        <>
        <button onClick={onClick}>Click me</button>
        </>
    )
}


function UseCallback() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log('Button clicked');
        setCount(count + 1);
    }, [count])

  return (
    <div>
        <p>Count: {count}</p>
        <ChildComponent onClick={handleClick}/>
    </div>
  )
}

export default UseCallback