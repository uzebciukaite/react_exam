import {useState, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../features/users'
import {useNavigate} from 'react-router-dom'

const RegisterPage = () => {

const emailRef = useRef()
const passOneRef = useRef()
const passTwoRef = useRef()
const [register, setRegister] = useState(false)
const [error, setError] = useState(null)
const [errorPass, setErrorPass] = useState(null)
const dispatch = useDispatch()
const nav = useNavigate()
const allUsers = useSelector(state => state.users.value.userArray) 

function registerUser(){
  const newuser = {
    userImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    userName : emailRef.current.value,
    passOne: passOneRef.current.value,
    passTwo: passTwoRef.current.value,
    userID: Math.floor(Date.now() / 1000),
  }
        if(newuser.userName.length < 4 || newuser.userName.length > 20){
            return setError("Invalid username: username has to have at least 4 digits and not more than 20 digits")
        } 
        if(allUsers.find(x => x.userName === newuser.userName)){
          
            return setError("User already exists")
        }

        if(!newuser.passOne.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#$%^&*_+]).{4,20}$/)){

            return setErrorPass("Password should contain 4-20 symbols and at least one upper case letter and a special symbol (!@#$%^&*_+) should be included")
        } 

        if(newuser.passOne !== newuser.passTwo) {
            
            return setErrorPass("Passwords do not match")
          }
          else {

        dispatch(addUser(newuser))
        setError(false)
        setErrorPass(false)
        setRegister(true)

        setTimeout(() => {
              nav("/login")
        },500)
          }
    

}


  return (
    <div className="register">
        <input type="text" ref={emailRef} style={{border: register? "2px solid green" : "none"}} placeholder="user name"/>
      {error && <p>{error}</p> }
      <input type="text" style={{border: register? "2px solid green" : "none"}} ref={passOneRef} placeholder="password"/>
      <input type="text" style={{border: register? "2px solid green" : "none"}} ref={passTwoRef} placeholder="repeat password"/>
      {errorPass && <p> {errorPass}</p>}
      <button  onClick={registerUser}>Register</button>
      {register && <p>Registration was successful</p>}
    </div>
  )
}

export default RegisterPage