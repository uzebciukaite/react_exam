import {useState, useRef} from 'react'
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {setLoggedInUser} from '../features/users'

const LoginPage = () => {

const allUsers = useSelector(state => state.users.value.userArray)  
const dispatch = useDispatch() 
const nav = useNavigate()

const usernameLogRef = useRef()
const passLogRef = useRef()

const [loginerror, setloginError] = useState(false)

function validateUser(){
       
        if(allUsers.filter(x => x.userName === usernameLogRef.current.value && x.passOne === passLogRef.current.value).length > 0){

        const userIsregistered = allUsers.filter(x => x.userName === usernameLogRef.current.value)
        dispatch(setLoggedInUser(userIsregistered))

        setTimeout(()=> {
        nav("/userprofile")
        },500)
        

        } else {
        setloginError(true)
        }
}


  return (
    <div className="login">
        <input type="text" ref={usernameLogRef} placeholder="username"/>
        <input type="text" ref={passLogRef} placeholder="password"/>
      {loginerror && <p>User not found</p>}
      <button onClick={validateUser}>Login</button>
    </div>
  )
}

export default LoginPage