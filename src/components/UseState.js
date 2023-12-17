import React, {useState} from 'react'

const UseState=() =>{
  // const [name, setName] = useState('Enter name');
  // const [age, setAge] = useState('Enter age');
  
  // const handleClick =()=>{
  //   setName('Lovish');
  // }
  // const handleCount =()=>{
  //   setAge(23);
  // }
  const [data, setData] = useState({ name: 'Enter your name', age: 0 });

  const handleClick = () => {
    // Update the state with a new object
    setData({
      name: 'Lovish',
      age: 21,
    });
  };

  return (
    <div className='container'>
      <p>My name is {data.name} and age is {data.age} </p>
      <button className='primary' onClick={handleClick}>
        Click me
      </button>
      {/* <button className="success" onClick={handleCount}>update age</button> */}
    </div>
  );
}

export default UseState