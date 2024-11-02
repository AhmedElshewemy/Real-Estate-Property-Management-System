import axios from "axios";
import React, { useState,useEffect } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { getAuthUserJWt } from "../../helper/Storage";

const AddLease =()=>{
  const authjwt =getAuthUserJWt();
    const [lease,setlease]=useState({
    propertyId:"",
    tenantId:"",
    startDate:"",
    endDate:"",
    paymentDueDate: "",  
    securityDeposit: "",
    rentAmount:"",
    leaseTerms:"",
      err:null,
      loading:false,
      success:null,

  });
  
  const AddLease=(e)=>{
  e.preventDefault();
  setlease({...lease, loading:true});
  const formData =new FormData();
  formData.append("propertyId",lease.propertyId);
  formData.append("tenantId",lease.tenantId);
  formData.append("startDate",lease.startDate);
  formData.append("endDate",lease.endDate);
  formData.append("paymentDueDate",lease.paymentDueDate);
  formData.append("securityDeposit",lease.securityDeposit);
  formData.append("rentAmount",lease.rentAmount);
  formData.append("leaseTerms",lease.leaseTerms);



  axios.post("https://redsea.runasp.net/api/lease/Add",{

    propertyId:lease.propertyId,
    tenantId:lease.tenantId,
      startDate:lease.startDate,
      endDate:lease.endDate,
      paymentDueDate: lease.paymentDueDate,
      securityDeposit: lease.securityDeposit,
      rentAmount: lease.rentAmount,
      leaseTerms: lease.leaseTerms,

  },authjwt)
  .then(res=>{
    setlease({
    propertyId:"",
    tenantId:"",
    endDate:"",
      startDate:"",
      paymentDueDate: "",  
      securityDeposit:"",
      rentAmount:"",
      leaseTerms:"",
      err:null,
      loading:false,
      success:"lease added successful",
    })
    
       

  }).catch(errr=>{ 
    setlease({...lease,
      err:errr,
      loading:false,
      success:"lease added faild",
    })
    
  })

}
    return ( <div className="login-container"> 
    <h1>Add New lease </h1>
    {/* {login.err.map((error ,index)=>(
      <Alert key={index} variant="danger" className="p-2" >
     {error}
    </Alert>
    ))} */}

        { lease.err &&(
        <Alert variant="danger" className="p-2" >
          {lease.err}
        </Alert>
        )
          
        }
      
     
      { lease.success &&(
        <Alert variant="success" className="p-2" >
          {lease.success}
        </Alert>
        )
          
      }
    
    
         <Form onSubmit={AddLease} >
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="propertyId" value={lease.propertyId} onChange={(e)=>setlease({...lease, propertyId:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="number" placeholder="Enter tenantId"  value={lease.tenantId} onChange={(e)=>setlease({...lease, tenantId:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="date" placeholder="Enter startDate" value={lease.startDate} onChange={(e)=>setlease({...lease, startDate:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Control type="date" placeholder="Enter endDate" rows={5} value={lease.endDate} onChange={(e)=>setlease({...lease, endDate:e.target.value})} />

       </Form.Group>
    

      <Form.Group className="mb-3" >
        <Form.Control type="date" placeholder="Enter paymentDueDate" value={lease.paymentDueDate} onChange={(e)=>setlease({...lease, paymentDueDate:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="number" placeholder="Enter securityDeposit" value={lease.securityDeposit} onChange={(e)=>setlease({...lease, securityDeposit:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="number" placeholder="Enter rentAmount"  value={lease.rentAmount} onChange={(e)=>setlease({...lease, rentAmount:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter leaseTerms"  value={lease.leaseTerms} onChange={(e)=>setlease({...lease, leaseTerms:e.target.value})} />
      </Form.Group>



      <Button className="btn btn-dark w-100"  variant="primary" type="submit" >
      Add New Lease
      </Button>
    </Form>
    </div>
    );
};
export default AddLease;