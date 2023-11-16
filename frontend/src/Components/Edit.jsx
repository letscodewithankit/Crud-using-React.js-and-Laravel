import React from 'react';

export default function Edit(props) {
    console.log(props);
return (
    <>

    <form action={'http://127.0.0.1:8000/api/edit_data/'+props.value.id} method='post'>
    <div style={{marginTop:"20px"}} className='container'>
    <div className='card'>
        <div className='card-header'>
        <h1>Edit text</h1>
        </div>
        <div className='card-body'>
        
            <div className='row'>
            <div className='col'>
                <input type='text' name='firstname' defaultValue={props.value.first_name} className='form-control' placeholder='Enter first name'/>
            </div>
            <div className='col'>
                <input type='text' name='middlename' defaultValue={props.value.middle_name} className='form-control' placeholder='Enter middle name'/>
            </div>
            <div className='col'>
                <input type='text' name='lastname' defaultValue={props.value.last_name} className='form-control' placeholder='Enter last name'/>
            </div>
            </div>
            <br/>
            <div className='row'>
            <div className='col'>
            <input type='number' name='age' defaultValue={props.value.age} className='form-control' placeholder='Age'/>
            </div>
            <div className='col'>
            <input type='date' name='dob' defaultValue={props.value.dob} className='form-control' placeholder='DOB'/>
            </div>
            <div className='col'>
            <input type='number' name='mob' defaultValue={props.value.mob} className='form-control' placeholder='Mobile number'/>
            </div>
            </div>
            <br/>
            <div className='row'>
            <div className='col'>
            <input type='text' name='email' defaultValue={props.value.e_mail} className='form-control' placeholder='E-mail'/>
            </div>
            </div>
        
        </div>
        <div className='card-footer'>
        <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </div>
      </div>
      </form>
    </>
  )
}
