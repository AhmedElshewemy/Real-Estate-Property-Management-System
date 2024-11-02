import React from "react";
import { Card } from "react-bootstrap";

import '../css/ProductCard.css'
import { Link } from "react-router-dom";
const ProductCard =(props)=>{
  const domain = "https://redsea.runasp.net/"; 

  const fullImageUrl = `${domain}${props.Img}`;
return <div>
      <Card >
        
      <Card.Img className="card-product" variant="top" src={fullImageUrl}/>
      <Card.Body className="text-left">
        <Card.Title>{props.Name}</Card.Title>
        <Card.Text> PropertyType  :{props.PropertyType} </Card.Text>
        <Card.Text> Address :{props.Address}
        </Card.Text>
        <Card.Text>SquareFootage :{props.SquareFootage}
        </Card.Text>
        <Card.Text>  RentPrice : {props.RentPrice}
        </Card.Text>
        <Card.Text> AvailabilityStatus :{props.AvailabilityStatus}
        </Card.Text>

        <Link className="btn btn-dark w-100" to={"/"+ props.id}>Go somewhere</Link>
        
      </Card.Body>
    </Card>
    </div>;


};
export default ProductCard;