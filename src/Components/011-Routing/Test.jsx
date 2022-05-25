import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';
import About from './About'


const Test = () => {

    let b1Option2 = "new button text";
    const [buttonOne, setButtonOne] = useState("Option2")
    const [TestIntro, setTestIntro] = useState("Test page intro paragraph.")
    const [int, setInt] = useState(1)

    return ( 

<div>
    
    <h3>test</h3>
    <h3>{TestIntro}</h3>

    <Button onClick={() => {
       setTestIntro("This is the new test intro words")
       setButtonOne(b1Option2)
       setInt(2) 
     }}>{buttonOne}</Button>

     <Button >
        Props
        <About int = {int}> </About>
     </Button>


    <Button onClick={() => {
       window.location="./About";
     }}>buttom</Button>
</div>
    );
}

export default Test;