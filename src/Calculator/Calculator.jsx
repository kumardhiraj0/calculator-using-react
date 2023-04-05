import { useState } from "react";
import "./calculator.css";

const Calculator = ()=>{
    const [result,setResult] = useState("");
    const clickHandler = (event)=>{
        setResult(result.concat(event.target.value))
        console.log(event.target.value)

    }
    const handleClear = ()=>{
        setResult("")
    }
    const handleCalculate = ()=>{
        setResult(eval(result).toString());
    }
    return (
        
       <div id="container">
        <h2>Calculator</h2>
            <div className="subcontainer">
                <input type="text" className="input" placeholder="0"  value={result} id="res"/>
            </div>

            <div className="subcontainer">
                <input type="button" className="btn" value="1" onClick={clickHandler}/>
                <input type="button" className="btn" value="2" onClick={clickHandler}/>
                <input type="button" className="btn" value="3" onClick={clickHandler}/>
                <input type="button" className="btn" value="+" onClick={clickHandler}/>
           </div>

           <div className="subcontainer">
                <input type="button" className="btn" value="4" onClick={clickHandler}/>
                <input type="button" className="btn" value="5" onClick={clickHandler}/>
                <input type="button" className="btn" value="6" onClick={clickHandler}/>
                <input type="button" className="btn" value="-" onClick={clickHandler}/>
            </div>


            <div className="subcontainer">
                <input type="button" className="btn" value="7" onClick={clickHandler}/>
                <input type="button" className="btn" value="8" onClick={clickHandler}/>
                <input type="button" className="btn" value="9" onClick={clickHandler}/>
                <input type="button" className="btn" value="*" onClick={clickHandler}/>
            </div>


            <div className="subcontainer">
                <input type="button" className="btn" value="C" onClick={handleClear}/>
                <input type="button" className="btn" value="0" onClick={clickHandler}/>
                <input type="button" className="btn" value="=" onClick={handleCalculate}/>
                <input type="button" className="btn" value="/" onClick={clickHandler}/>
            </div>
       </div>
    )

}
export default Calculator;