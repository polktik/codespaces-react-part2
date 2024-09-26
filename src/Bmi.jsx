import { useRef, useState } from "react";

const BmiText=({bmi})=> {
    if (bmi < 18.5) return(<h1>Underweight</h1>);
    if(bmi > 30) return(<h1>Overweight</h1>);
    return(<h1>Normal</h1>);
}

export default function Bmi() {
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [bmi, setBmi] = useState(0.00);

    function handleClick() {
        let weight = W_input.current.value;
        let height = H_input.current.value/100;
        setBmi(weight/Math.pow(height,2));
    }
    
    return(<>
    <input ref={W_input} type="number" placeholder="Weight"/> Kilograms
    <br/>
    <input ref={H_input} type="number" placeholder="Height"/> Centimeters
    <br/>
    <button onClick={handleClick}>Calculation</button>

    <h2> BMI: {bmi.toFixed(2)}</h2>
    <BmiText bmi={bmi}/>
    </>);
}