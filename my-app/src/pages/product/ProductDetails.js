import React, { useEffect, useState } from "react";
// import { Alert, Button,Form } from "react-bootstrap";
import '../../css/ProductDetails.css';
import Issue from "../../components/Issue";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { getAuthUser, getAuthUserJWt } from "../../helper/Storage";

const ProductDetails =()=>{
    let {id} =useParams();

    const auth=getAuthUser();
    const authjwt=getAuthUserJWt();

    const [property,setProperty]=useState({
        loading:true,
        result:null,
        Issues:[],
        err:null,
    });

    const [issue,setIssue]=useState({
        loading:false,
        property_id:"",
        reportedDate:"",
        resolutionDate:"",
        status:"",
        err:null,
    });

const sendIssue=(e)=>{
e.preventDefault();
setIssue({...issue, loading:true})

axios.post("https://redsea.runasp.net/api/IssueReport/Add",authjwt,{
  property_id:id,
  issueDescription:issue.issueDescription, 
  reportedDate:issue.reportedDate, 
  resolutionDate:issue.resolutionDate, 
  status: issue.status,

}).then(res =>{
    setIssue({...issue, loading:false})


}).catch(errors=>{
    setIssue({...issue, loading:false})

 

});
}

    useEffect(()=>{
        axios.get("https://redsea.runasp.net/api/Property/Get/" + id)
        .then(res=>{
            setProperty({...property,result: res.data, loading: false, err:null})
            
            axios.get("https://redsea.runasp.net/api/IssueReport/GetAll",authjwt ).then(resp=>{
                setProperty({...property,Issues: resp.data, loading: false, err:null})
            })
           
        }).catch(err=>{ setProperty({...property,loading: false, err: 'ops something went wrong '})
        })

    },[])

    return (
    <div className="product-details-contanier p-5">
  {/* loader */}
  {property.loading === true &&(
   <div className="text-center">
   <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
   </div>

)}


    {/* listsmovies */}
    {property.loading === false && property.err ==null &&(
    <>
     <div className="row">
            <div className="col-3">
               
                <img className="product-image"src= {"https://redsea.runasp.net/"+property.result.img} alt={property.result.name} />

            </div>
            <div className="col-9">
                <h3> {property.result.name}</h3>
       
        <p> PropertyType  :{property.result.propertyType} </p>
        <p> Address :{property.result.Address}
        </p>
        <p> description :{property.result.description}
        </p>
        <p>SquareFootage :{property.result.squareFootage}
        </p>
        <p>  RentPrice : {property.result.rentPrice}
        </p>
        <p> AvailabilityStatus :{property.result.availabilityStatus}
        </p>
            </div>
        </div>
        <hr/>
       
    { auth && auth.roles == "Manager" && <>
        <h5 className="text-center bg-dark text-white p-2"> issues</h5>
    {property.Issues.map((issue)=>(
            <Issue issue={issue.issueDescription}/>
        ))}
        {property.Issues.length ==0 &&(

            <Alert variant="info" className="p-2" >
                there is no issues for this Estate
            </Alert>
            )}
        
        </>
        }

   {auth && auth.roles != "Manager"&& <>
   
    <Form onSubmit={sendIssue}>
      <Form.Group className="mb-3">
       
        <textarea className="form-control" placeholder="Description Issue" rows={5}
        value={issue.issue}
        onChange={(e)=>setIssue({...issue,issue:e.target.value})}
        ></textarea>

      </Form.Group>
      <Form.Group className="mb-3">

        <button className="btn btn-dark">Send Issue</button>
      </Form.Group>
      </Form>
   

    </>}
       
    
    
    
    </>)}
    {/* alert */}
    {property.loading === false && property.err!=null &&(

            <Alert variant="danger" className="p-2" >
    { property.err}  
          </Alert>
)}
       
    </div>);

};
export default ProductDetails;