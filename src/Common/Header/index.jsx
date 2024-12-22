import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_BC_URL}/products`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("API failed");
    }
    return response.json();
  })
  .then((data) => {
    setProducts([...data]);
  })
  .catch((error) => {
    console.log("error", error);
  });
  },[])
  return (
    <header>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to={"/longer"}>
                Longer
            </Link>
          {/* <Nav.Link>Loooonger NavLink</Nav.Link> */}
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;
