import { useEffect, useState } from "react";
import axios from 'axios';
import Hamster from "./Hamster";



const Home = () => {


    const [hamsterData, setHamsterData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);


    const getData = (() => {
        axios.get(`http://localhost:5015/hamster/getAll`)
            .then((response) => {
            
            setHamsterData(response.data)

            setLoaded(true);

        }).catch((error) => {
            setLoaded(true);
            setError(error);
        }).then((response) => { 
           
        });
    });

    useEffect(() => {
        getData();
        
    },[]);





    if(error == true) {
        return <h2> Oops, theres been an error :o please refresh the page </h2>
    } else if(!loaded ) { // Loaded is not true / false
        return <h2> Please wait, data is loading! </h2>
    } else {
        return (
            <div>
                <h2> Loads if the data is fine! </h2>


                
                {hamsterData.map((hamster) => {
                    return <Hamster name={hamster.name} colour={hamster.colour} age={hamster.age} isCute={hamster.isCute}/>
                })}





            </div>
        )
    } 


    
}
 
export default Home;