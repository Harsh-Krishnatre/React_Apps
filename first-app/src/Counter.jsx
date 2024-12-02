import React,{useState} from "react";

const Counter = () =>{
    const [Count,setCount] = useState(0);

    function CounterIncreement(){
        setCount(Count+1);
    }
    function CounterDecreement(){
        setCount(Count-1);
    }
    return(
        <div className="Container">
            <h1>Counter 1: {Count}</h1>
            <h1>Counter 2: {Count*5}</h1>
        <div className="btn">
        <button id="increement" onClick={CounterIncreement}>Increement</button>
        <button id="decreemnt" onClick={CounterDecreement}>Decreement</button>
        </div>
        </div>
    )
}

export default Counter