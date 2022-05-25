import {useEffect, useState} from 'react';


const Clock = () => {

    // UseState to store and set the current time.
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // Use useEffect to console log and run a function in 1 second.
    // First param to pass in is my function, what does it do on re-render.
    useEffect(() => {
        setTimeout(tick, 1000);
    })

    // Some function to set the current time.
    const tick = () => {
        // I want it to set the state to the current time.
        setTime(new Date().toLocaleTimeString());
    }

    

    return ( 
        <div>
            
            <h2>Time is {time}</h2>


        </div>
     );
}
 
export default Clock;