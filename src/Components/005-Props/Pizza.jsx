


// Destructuring what we pass in
const Pizza = ({name, size, flavour}) => {
    return ( 
        <div>
            <h2>Name of customer is {name}</h2>
            <h2>Size of Pizza is {size}</h2>
            <h2>Flavour: {flavour}</h2>
        </div>
     );
}
 
export default Pizza;