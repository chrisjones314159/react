// Manager holds state and returns the components 
// Counter - holds int value it can update
// Display chow value
import {useState} from 'react';
import Display from './Display';
import Counter from './Counter';



const Manager = () => {

    // Set up state
    // const [variable name, set <variable name>] = useState(<starting value>)
    const[count, setCount] = useState(2);



    return ( 
        <div>
            <h2>Manager number: {count}</h2>
            <Counter setCount={setCount}/>
            <Display count={count}/>
        </div>
     );
}
 
export default Manager;