import {useEffect, useState} from 'react';


const Child = () => {

    const [value, SetValue] = useState(" ");
    const [counter, setCounter] = useState(-1);


    useEffect(() => {
        console.log(new Date().toLocaleTimeString());
        setCounter(counter+1);
    }, [value])


    return ( 
        <div>

        <label>Value </label>
        <input id="changeInput" type="text"/>

        <button onClick={() => {
            SetValue(document.getElementById('changeInput').value);
            document.getElementById('changeInput').value="";
        }}>Click me</button>

        <h2>{counter}</h2>
        <h2>{value}</h2>


        </div>
     );
}
 
export default Child;