import './App.css';
import Checker from './components/Checker';
import UseCallback from './components/UseCallback';
import UseEffect from './components/UseEffect';
import UseMemo from './components/UseMemo';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import UseState from './components/UseState';
import React, { createContext, useContext, useState, useEffect } from "react";


export const StateContext = createContext();


function Home() {
  // Use the context to get the state value
  const state = useContext(StateContext);

  return (
    <div>
      <h2>{`Hi! My state is ${state}!`}</h2>
    </div>
  );
}




//useState hooks

function App() {
  const [state, setState] = useState('true');

  const update = () => {
    setTimeout(() => {
      setState('John Wick');
    }, 1000); 
  };


  useEffect(() => {
    update();
  }, []);

  return (
    <>
    <div className="container">
      <UseState/>
      <UseEffect/>
      <UseRef/>
      <StateContext.Provider value={ state }>
      <h1>{`Hi! My state is ${state}!`}</h1>
      <Home  />
      <Checker/>
      </StateContext.Provider>
      <UseReducer/>
      <UseCallback />
      <UseMemo />
    </div>
    </>
  );
}

export default App;
