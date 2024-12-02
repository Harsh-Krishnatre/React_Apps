import React, {useState,useRef} from "react";

const Refex = () =>{
    const [inputValue,setInputvalue] = useState("");
    const count  = useRef(0);
    return (
        <div>
            <input type="text" value={inputValue} onChange={(e)=>{
                setInputvalue(e.target.value);
            }}/>
            <br />
            Render Count:{count.current=count.current+1}
        </div>
    )
}

export default Refex;