import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter init={0} colo="green"/>
      
    </div>
  );
}

function Counter(props){
  const[val, setVal]= React.useState(props)
  const [col, setCol]= React.useState(props)

  const handleCount= (value)=>{
    // props.init+= value;
    setVal({...val, init: val.init+value})
    if(val.init%2===0){
      setCol({...col, colo:"red"})
    }else{
      setCol({...col, colo:"green"})
    }
    // console.log(val)
  }

  const handleDCount= (value)=>{
        setVal({...val, init:val.init*value})
  }

  return( 
    <>
      <h2 style={{color: col.colo}}>{val.init}</h2>
      <button onClick={()=> handleCount(1)}>+</button>
      <button onClick={()=> handleCount(-1)}>-</button>
      <button onClick={()=> handleDCount(2)}>X 2</button>
    </>
  );
}
