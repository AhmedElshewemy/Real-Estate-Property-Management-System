import React from "react";
// import { Alert, Button,Form } from "react-bootstrap";
import '../../css/ProductDetails.css';
import Review from "../../components/Reviews";

const ProductDetails =()=>{
    return (
    <div className="product-details-contanier p-5">

        <div className="row">
            <div className="col-3">
                <img className="product-image"src="" alt=""/>

            </div>
            <div className="col-9">
                <h3> Product Title</h3>
                <p>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
            </div>
        </div>
        <hr/>
        <h5 className="text-center bg-dark text-white p-2"> Reviews</h5>
        <Review/>
        <Review/>
        <Review/>
    </div>);

};
export default ProductDetails;