import {useEffect, useState} from 'react';
import Test from './Test'

const About = ({int}) => {

    const sentenceOne = "This is sentence one."

    const [test, setTest] = useState("this is a use state in about")

    console.log(int)

    return (

        <div>
            <h3>about</h3>
            
            
            <img src="https://www.collinsdictionary.com/images/full/rabbit_274039655.jpg"></img>
            <h3>This is the about page</h3>





        </div>
    );
}

export default About;