import React from "react";
import { Card } from "react-bootstrap";

import '../css/ProductCard.css'
import { Link } from "react-router-dom";
const ProductCard =()=>{

return <div>
      <Card >
      <Card.Img className="card-product" variant="top" src="file:../" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link className="btn btn-dark w-100" to={"/5"}>Go somewhere</Link>
        
      </Card.Body>
    </Card>
    </div>;


};
export default ProductCard;