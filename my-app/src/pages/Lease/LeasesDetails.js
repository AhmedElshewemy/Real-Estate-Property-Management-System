import React, { useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import '../../css/ManagePropertie.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { getAuthUserJWt } from "../../helper/Storage";
const LeasesDetails =()=>{
  const authjwt =getAuthUserJWt();

  

  const [leases,setLease]=useState({
    loading:true,
    results:[],
    err:null,
    reload:0
});
        useEffect(()=>{
          setLease({...leases,loading:true})
          axios.get("https://redsea.runasp.net/api/Lease/GetAll",authjwt)
          .then(res=>{
              console.log(res);
              setLease({...leases,results: res.data, loading: false, err:null})

          }).catch(err=>{ setLease({...leases,loading: false, err: 'ops something went wrong '})
          })

        },[leases.reload])

  const Deletelease =(ID)=>{
          axios.delete("https://redsea.runasp.net/api/lease/Delete/"+ID,authjwt)
          .then(res=>{
            setLease({...leases,reload:leases.reload+1})
               

          }).catch(errr=>{ setLease({...leases,loading: false, err: 'ops something went wrong '})
         

          })
        }
    return (
    <div className="manage p-5">
        <div className="header d-flex justify-content-between mb-3">
        <h3 className="text-center ">Manage Estate lease </h3>
        <Link to={"addLeases"} className="btn btn-sm btn-success"> +Add lease</Link> 
        </div>
        <Alert variant="danger" className="p-2" >
          {leases.err}
        </Alert>

        <Alert variant="success" className="p-2" >

      </Alert>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>propertyId</th>
          <th>tenantId</th>
          <th>startDate</th>
          <th>endDate</th>
          <th>paymentDueDate</th>
          <th>securityDeposit</th>
          <th>leaseTerms</th>
          <th>property</th>
          <th>tenant</th>
          <th>payments</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {
          leases.results.map((lease)=>(
            <tr key={lease.id}>
          <td>{lease.id}</td>
          
          <td>{lease.tenantId}</td>
          <td>{lease.startDate}</td>
          <td>{lease.endDate}</td>
          <td>{lease.paymentDueDate}</td>
          <td>{lease.securityDeposit}</td>
          <td>{lease.rentAmount}</td>
          <td>{lease.leaseTerms}</td>
          <td>{lease.property}</td>
          <td>{lease.tenant}</td>
          <td>{lease.payments}</td>

          <td>

          <Link to={"/"+lease.id} className=" btn btn-info "> Show</Link>
          

          <button className=" btn btn-sm btn-danger" onClick={(e)=>{Deletelease(lease.id)}}> Delete</button> 
           

          </td>

        </tr>
          ))
        }
        
      </tbody>
    </Table>
    
    
    </div>);

};
export default LeasesDetails;