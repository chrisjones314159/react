import { useEffect, useState } from "react";
import axios from 'axios';



const Bar = () => {

    const [beerData, setBeerData] = useState([]);

    const [error, setError] = useState(null);

    const [ loaded, setLoaded] = useState(false);

    

    
       

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers')
        .then((response) => {

            setLoaded(true);
            setBeerData(response.data);
            console.log(response.data);
            
            
            

        })
        .catch((error) => {
            setLoaded(true);
            setError(error);
        })
    }, []); // The empty array mean the useEffect runs only once, when the page loads.

    // useEffect(getData(), []);

    return ( 
        <div>

            <h4>test</h4>



        </div>
     );
}
 
export default Bar;