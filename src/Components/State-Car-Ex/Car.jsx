import {useState} from 'react';


const Car = () => {

    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Focus");
    const [colour, setColour] = useState("blue");
    const [year, setYear] = useState("2002");


    let brandValue;
    let modelValue;


    return ( 
        <div>


            <label>Brand: </label>
            <input id="brandInput" name="brand"
                type="text"
                onChange={(event) => {
                    brandValue = event.target.value;
                    
                }}
                />

            <label>Model: </label>
            <input id="modelInput" name="model"
                type="text"
                onChange={(event) => {
                    modelValue = event.target.value;
                    
                }}
                />



                <button onClick={() => {
                    setBrand(brandValue);
                    setModel(modelValue);

                    document.getElementById('brandInput').value="";
                    document.getElementById('modelInput').value="";
                }}/>


                <h3>Brand: {brand}</h3>
                <h3>Model: {model}</h3>
            


        </div>
     );
}
 
export default Car;