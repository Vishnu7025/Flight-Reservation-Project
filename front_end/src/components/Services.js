import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';


function Services() {
    const [state, setState] = useState([])
    const getelements = async()=>{
        const response = await axios.get('http://127.0.0.1:8000/flightServices/passenger/')
        setState(response.data)
    }
    useState(()=>{
        getelements();
    },[])
  return (
    <div>
    <Table striped bordered hover size="sm">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Phone Number</th>
                  </tr>
              </thead>
       {
        state.map((state,index)=>{
        return (
            <>
        {/* <div key={index}>
                {state.firstName}
            </div> */}
                <tbody>
                    <tr>
                        <td>{index+1}</td>
                        <td>{state.firstName}</td>
                        <td>{state.lastName}</td>
                        <td>{state.phone}</td>
                    </tr>
                </tbody>
            </>
        )})
       }   
        </Table>
    </div>
  )
}

export default Services