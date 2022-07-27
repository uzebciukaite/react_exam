import {React} from 'react'

import {useNavigate} from 'react-router-dom'

function HomePage({}) {

      const nav = useNavigate()





  return (
    <div className="homepage">

    <h1>Welcome to my page.</h1>
    <div>
      <h3>Already have account? Click here to log in. </h3>
      <button onClick={() => nav("/login")}>LOG IN </button>
    </div>
    <div>
      <h3>Don't have an account? Click here to register.
      </h3>
      
      <button onClick={() => nav("/register")}>REGISTER</button>
    </div>
    
    </div>
  )
}

export default HomePage