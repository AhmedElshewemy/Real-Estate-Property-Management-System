import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { getAuthUser } from "../../helper/Storage";
import { useParams } from "react-router-dom";

const UpdatePropertie =()=>{
  let {id}=useParams();
  const auth =getAuthUser();
    const [property,setProperty]=useState({
      name:"",
      address:"",
      propertyType:"",
      availabilityStatus:"",
      squareFootage: "",  
      rentPrice: "",
      description:"",
      image:null,
      err:null,
      loading:false,
      success:null,
      reload:false,

  });

  const image =useRef(null);

  const updatePropertie=(e)=>{
  e.preventDefault();
  setProperty({...property, loading:true});
  const formData =new FormData();
  formData.append("name",property.name);
  formData.append("address",property.address);
  formData.append("propertyType",property.propertyType);
  formData.append("availabilityStatus",property.availabilityStatus);
  formData.append("squareFootage",property.squareFootage);
  formData.append("rentPrice",property.rentPrice);
  formData.append("description",property.description);

  if (image.current.files && image.current.files[0]){
    formData.append("file", image.current.files[0]);
  }


 axios.put("https://redsea.runasp.net/api/Property/Edit/"+id,formData,{
    headers: {
     // 'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${auth.token}` // Attach the JWT token here
    },
  })
  .then(res=>{
    setProperty({
     ...property,
      err:null,
      loading:false,
      success:"property update successful",
      reload:property.reload+1,
    })
  
       

  }).catch(errr=>{ 
    setProperty({
      ...property,
      err:"property update faild",
      loading:false,
      success:null,
    })
  })

};

useEffect(()=>{
  axios.get("https://redsea.runasp.net/api/Property/Get/" + id,{
  })
  .then(res=>{
       setProperty({
        ...property,
        name:res.data.name,
        address:res.data.address,
        propertyType:res.data.propertyType,
        availabilityStatus:res.data.availabilityStatus,
        squareFootage: res.data.squareFootage, 
        rentPrice: res.data.rentPrice,
        description:res.data.description,
        image:res.data.img,
        err:null,
        loading:false,
        success:"property added successful",
      })
      
   


  }).catch(errr=>{ 
    setProperty({
      ...property,
      err:"property get update faild or other faild "+errr,
      
      loading:false,
      success:null,
    })
  })

},[property.reload])

    return ( <div className="login-container"> 
        <h1>Add New Estate </h1>
        {/* {login.err.map((error ,index)=>(
          <Alert key={index} variant="danger" className="p-2" >
         {error}
        </Alert>
        ))} */}


       { property.err &&(
        <Alert variant="danger" className="p-2" >
          {property.err}
        </Alert>
        )
          
        }
      
     
      { property.success &&(
        <Alert variant="success" className="p-2" >
          {property.success}
        </Alert>
        )
          
      }
        
    
          <Form onSubmit={updatePropertie} >
              <img alt={property.name} 
                style={{
                  width:"50%",
                  height:"200px",
                  objectFit:"cover",
                  borderRadius:"10px",
                  border:"1px solid #ddd",
                  marginBottom:"10px",
                }}
              src={"https://redsea.runasp.net/"+property.image}
              />
       <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Owner's name" value={property.name} onChange={(e)=>setProperty({...property, name:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="address" placeholder="Enter address"  value={property.address} onChange={(e)=>setProperty({...property, address:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <textarea type="address" placeholder="Enter description" rows={5} value={property.description} onChange={(e)=>setProperty({...property, description:e.target.value})} >
       </textarea>
       </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="address" placeholder="Enter squareFootage" value={property.squareFootage} onChange={(e)=>setProperty({...property, squareFootage:e.target.value})} />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Control type="address" placeholder="Enter propertyType" value={property.propertyType} onChange={(e)=>setProperty({...property, propertyType:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="address" placeholder="Enter rentPrice" value={property.rentPrice} onChange={(e)=>setProperty({...property, rentPrice:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="address" placeholder="Enter availabilityStatus"  value={property.availabilityStatus} onChange={(e)=>setProperty({...property, availabilityStatus:e.target.value})} />
      </Form.Group>


      <Form.Group className="mb-3" >
        <input type="file" className="form-control" ref={image}/>
      </Form.Group>

          <Button className="btn btn-dark w-100"  variant="primary" type="submit" >
          Update Estate
          </Button>
        </Form>
        </div>
        );

};
export default UpdatePropertie;