const CompWithVars = () => {


    let name = "Chris";

    const animal = {
        "name" : "kangaroo",
        "age" : 6
    }

    return(
        <div>
            <h3>This will render</h3>
            <h3>My name is {name}</h3>
            <h4>The animals name is: {animal.name}</h4>

        </div>
    )

}




export default CompWithVars;