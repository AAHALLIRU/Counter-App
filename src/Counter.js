import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="container">
            <div className="watch font">
                <h1 className="heading">tally counter</h1>
                <hr/>
                <div className="screen">{counter}</div>
                <div className="buttons">
                    <button className="font" onClick={() => setCounter(prev=>prev - 1)}>subtract</button>
                    <button className="font" onClick={() => setCounter(prev=>prev + 1)}>add</button>
                </div>
                <button className="font" onClick={() => setCounter(0)}>reset</button>
            </div>
        </div>
    )
}
export default Counter