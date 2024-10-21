import React, {useEffect, useState} from "react";
import ProductCard from'../../components/ProductCard'
import { Form } from "react-bootstrap";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';

const Home =()=>{
   
   
    const [propertys,setProperty]=useState({
        loading:true,
        results:[],
        err:null,
        reload:0
    });

    useEffect(()=>{
        axios.get("https://redsea.runasp.net/api/Property/GetAll")
        .then(res=>{
            console.log(res);
            setProperty({...propertys,results: res.data, loading: false, err:null})

        }).catch(err=>{ setProperty({...propertys,loading: false, err: 'ops something went wrong '})
        })

    },[])
    return(

   
    <div className="home-container p-5"> 
    {/* loader */}
    {propertys.loading === true &&(
   <div className="text-center">
   <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
   </div>

)}
    
    {propertys.loading === false && (
    <>
    
    {  /* filter*/ }
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
    
    </>
    )}
    
    
    </div>);

};
export default Home;