import { useParams } from "react-router-dom";

const Shop = () => {

    const{id} = useParams();

    return ( 
        <h3>Shop page of id: {id}</h3>
     );
}
 
export default Shop;