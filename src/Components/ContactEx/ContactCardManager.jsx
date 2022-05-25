
import ContactCard from "./ContactCard";

const ContactCardManager = () => {

    // My array of objects
    const pizzaArray = [
        {
            type : "Pepperoni",
            size : 12,
            stuffedCrust : true
        },
        {
            type : "Veggie Volcano",
            size : 10,
            stuffedCrust : false
        },
        {
            type : "BBQ Beef",
            size : 13,
            stuffedCrust : true
        }
    ];

    return ( 
        <ContactCard pizzaArray={pizzaArray}/>
     );
}
 
export default ContactCardManager;