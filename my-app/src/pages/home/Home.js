import React from "react";
import ProductCard from'../../components/ProductCard'
import { Form } from "react-bootstrap";
const Home =()=>{
    return(
    <div className="home-container p-5"> 
    {
        // filter
    }
      <Form>
      <Form.Group className="mb-3 d-flex">
        <Form.Control type="text" placeholder="Search" className="rounded-0"/>

        <button className="btn btn-dark rounded-0">Search</button>
      </Form.Group>
      </Form>
    {
        // *
    }
        <div className="row ">
            <div className="col-3 card-movie-container">
            <ProductCard />
            </div>
            <div className="col-3 card-movie-container">
            <ProductCard />
            </div>
            <div className="col-3 card-movie-container">
            <ProductCard />
            </div>
            <div className="col-3 card-movie-container">
            <ProductCard />
            </div>
            <div className="col-3 card-movie-container">
            <ProductCard />
            </div>
        </div>
    
    </div>);

};
export default Home;