import React from 'react'
import axios from 'axios';

const instance = axios.create({
    headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE'
    }
});


function Login() {
  return (
    <div>Login</div>
  )
}

export default Login