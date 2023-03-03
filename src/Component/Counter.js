import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>Counter: {count}</h1>
            <div >
                <button onClick={()=>{setCount(count+1)}} >Icrease</button>
                <button onClick={()=>{setCount(count-1)}}>Decrease</button>
                <button onClick={()=>{setCount(0)}}>Reset</button>
            </div>
        </div>
    );
}
export default Counter;