import React, {useEffect, useState} from "react";
import ProductCard from'../../components/ProductCard'
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import { Alert, Form } from "react-bootstrap";


const Home =()=>{
   
   
    const [propertys,setProperty]=useState({
        loading:true,
        results:[],
        err:null,
        reload:0
    });
    const [search ,setSearch] =useState("");
    // const formData =new FormData();
    // formData.append("search",propertys.search);
    useEffect(()=>{
        setProperty({...propertys,loading:true})
        axios.get("https://redsea.runasp.net/api/Property/GetAll/",{
            params:{
                search:search,
            }
        })
        .then(res=>{
            console.log(res);
            setProperty({...propertys,results: res.data, loading: false, err:null})

        }).catch(err=>{ setProperty({...propertys,loading: false, err: 'ops something went wrong ',})
        })

    },[propertys.reload])

  const searchProperty =(e)=>{
    e.preventDefault();
    setProperty({...propertys, reload: propertys.reload+1})
  }
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
    {/* listsmovies */}
    {propertys.loading === false && propertys.err ==null &&(
    <>
    
    {  /* filter*/ }
      <Form onSubmit={searchProperty}>
      <Form.Group className="mb-3 d-flex">
        <Form.Control type="text" placeholder="Search" className="rounded-0" value={search} onChange={(e)=> setSearch(e.target.value)}/>

        <button className="btn btn-dark rounded-0">Search</button>
      </Form.Group>
      </Form>
    {
        // *
    }
        <div className="row ">
        {propertys.results.map((property)=>(
            <div className="col-3 card-movie-container" Key={property.id} >
            <ProductCard id={property.id} Name={property.Name} PropertyType={property.propertyType} Address={property.address} SquareFootage={property.squareFootage} RentPrice={property.rentPrice} AvailabilityStatus={property.availabilityStatus} Img={property.img} leases={property.leases}/>
            {console.log(propertys.img)};
          
            </div>
        ))}
            
        </div>
    
    </>
    )}

    {/* alert */}
     {propertys.loading === false && propertys.err!=null &&(

        <Alert variant="danger" className="p-2" >
            {    propertys.err}  
                  </Alert>
     )}

       {/* alert */}
       {propertys.loading === false && propertys.err == null && propertys.results.length === 0 &&(

    <Alert variant="info" className="p-2" >
        no propertys , please try again later !
             </Alert>
        )}
    </div>);

};
export default Home;