import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';


const Nav = () => {

  const [id, setId] = useState();
  

  let query = `/shop/${id}`;

  

  

    return (
      <div>


        <h2>Nav</h2>

        <Link to='/about'>
          <h4>about</h4>
        </Link>


        <form>
          <input id="shopInput" type="text" onChange={() => {
            setId(document.getElementById('shopInput').value)
          }}/>
        </form>

          {/* LINK TO THE SHOP */}
        <Link to={query}>
          <button onClick={() => {
            document.getElementById('shopInput').value="";
          }}>Shop</button>
        </Link>


        <Link to='/'>
          <h4>Home</h4>
        </Link>

        <Link to='./Test'>
          <Button> Test</Button>
        </Link>


        <h3>Bottom of nav bar</h3>
      </div>
      );
}
 
export default Nav;