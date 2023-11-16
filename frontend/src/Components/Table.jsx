import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Create from './Create';
import Edit from './Edit';

export default function Table() {

  const [data22,setData22]=useState([]);
  useEffect(()=>
  {
    axios.get(
      "http://127.0.0.1:8000/api/get_data"
    ).then(
      (response)=>{
      setData22(response.data)
      }
    )
  },[]
  )

const [data,setData]=useState([]);
const dataUrl='http://127.0.0.1:8000/api/delete_data/';

const DeleteData= (id)=>
{
  axios.post(dataUrl+id).then((response)=>
  {
    
    Swal.fire({
      
      icon: 'success',
      title: response.data,
      showConfirmButton: false,
      timer: 1500
    })
    window.location.reload();
  })
  }

    return (
    <>
    <div className='container p-5'>
        <div className='card'>
            <div className='card-header'>
            <h1>Table data</h1>
            <button style={{marginLeft:"900px"}} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal">+ Create</button>
            </div>
            <div className='card-body'>
            <table className='table table-striped'>
    <thead>
        <tr>
            <th>Firstname</th>
            <th>Middlename</th>
            <th>Lastname</th>
            <th>E-mail</th>
            <th>Date of birth</th>
            <th>Age</th>
            <th>Mobile number</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            {
                data22.map(data=>
                <tr>
                <td>{data.first_name}</td>
                <td>{data.middle_name}</td>
                <td>{data.last_name}</td>
                <td>{data.e_mail}</td>
                <td>{data.dob}</td>
                <td>{data.age}</td>
                <td>{data.mobile_number}</td>
                <td><button onClick={()=>{setData(data)}} className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#myModal_edit">Edit</button></td>
                <td><button onClick={()=>{DeleteData(data.id)}} className='btn btn-danger'>Delete</button></td>
            </tr>
            )
        }
        </tbody>
    
    </table>

  <>
  
  <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        
        <div className="modal-header">
          <h4 className="modal-title">Add member</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        
        <div className="modal-body">
          <Create/>
        </div>
        
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</>


<>
  <div className="modal fade" id="myModal_edit">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        
        <div className="modal-header">
          <h4 className="modal-title">Add member</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        
        <div className="modal-body">
          <Edit value={data}/>
        </div>
        
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</>

            </div>

        </div>
    
    </div>
    </>
   )
}
