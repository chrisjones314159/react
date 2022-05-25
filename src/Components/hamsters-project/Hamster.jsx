const Hamster = ({name, colour, age, isCute}) => {
    return ( 
        <div>
            <h3>{name}</h3>
            <h4>{colour}</h4>
            <h4>{age}</h4>
            <h4>{isCute.toString()}</h4>
        </div>
     );
}
 
export default Hamster;