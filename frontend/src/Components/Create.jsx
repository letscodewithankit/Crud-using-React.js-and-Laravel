import React from 'react'

export default function Create() {
  return (
    <>
    <form action='http://127.0.0.1:8000/api/create_data' method='post'>
    <div style={{marginTop:"20px"}} className='container'>
    <div className='card'>
        <div className='card-header'>
        <h1>PI (personal information)</h1>
        </div>
        <div className='card-body'>
        
            <div className='row'>
            <div className='col'>
                <input type='text' name='firstname' className='form-control' placeholder='Enter first name'/>
            </div>
            <div className='col'>
                <input type='text' name='middlename' className='form-control' placeholder='Enter middle name'/>
            </div>
            <div className='col'>
                <input type='text' name='lastname' className='form-control' placeholder='Enter last name'/>
            </div>
            </div>
            <br/>
            <div className='row'>
              <div className='col'>
              <input type='number' name='age' className='form-control' placeholder='Age'/>
              </div>
              <div className='col'>
              <input type='date' name='dob' className='form-control' placeholder='DOB'/>
              </div>
              <div className='col'>
              <input type='number' name='mob' className='form-control' placeholder='Mobile number'/>
              </div>
            </div>
            <br/>
            <div className='row'>
              <div className='col'>
              <input type='text' name='email' className='form-control' placeholder='E-mail'/>
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
