import React, { useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import '../../css/ManagePropertie.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";
const Manage =()=>{
  const auth =getAuthUser();

  const [propertys,setProperty]=useState({
    loading:true,
    results:[],
    err:null,
    reload:0
});
        useEffect(()=>{
          setProperty({...propertys,loading:true})
          axios.get("https://redsea.runasp.net/api/Property/GetAll")
          .then(res=>{
              console.log(res);
              setProperty({...propertys,results: res.data, loading: false, err:null})

          }).catch(err=>{ setProperty({...propertys,loading: false, err: 'ops something went wrong '})
          })

        },[propertys.reload])

  const DeleteProperty =(ID)=>{
          axios.delete("https://redsea.runasp.net/api/Property/Delete/"+ID,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${auth.token}` // Attach the JWT token here
            },
          })
          .then(res=>{
            setProperty({...propertys,reload:propertys.reload+1})
               

          }).catch(errr=>{ setProperty({...propertys,loading: false, err: 'ops something went wrong '})
         

          })
        }
    return (
    <div className="manage p-5">
        <div className="header d-flex justify-content-between mb-3">
        <h3 className="text-center ">Manage Estate Property </h3>
        <Link to={"addProperti"} className="btn btn-sm btn-success"> +Add Propertie</Link> 
        </div>
        <Alert variant="danger" className="p-2" >
          {propertys.err}
        </Alert>

        <Alert variant="success" className="p-2" >

      </Alert>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>IMAGE</th>
          <th>Estate Name</th>
          <th>Description</th>
          <th>Location</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {
          propertys.results.map((property)=>(
            <tr key={property.id}>
          <td>{property.id}</td>
          <td>
            <img src= {"https://redsea.runasp.net/"+property.img} alt="" className="image-avater"/>
          </td>
          <td>{property.name}</td>
          <td>{property.description}</td>
          <td>{property.address}</td>
          <td>

          <Link to={"/"+property.id} className=" btn btn-info "> Show</Link>
          
          <Link to={"" + property.id} className=" btn  btn-primary mx-2 center"> Update</Link> 

          <button className=" btn btn-sm btn-danger" onClick={(e)=>{DeleteProperty(property.id)}}> Delete</button> 
           

          </td>

        </tr>
          ))
        }
        
      </tbody>
    </Table>
    
    
    </div>);

};
export default Manage;