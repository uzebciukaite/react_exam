import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setLoggedInUser, activeChats } from '../features/users'

const Toolbar = () => {
const nav = useNavigate()
const dispatch = useDispatch()
const [showToolbar, setShowToolbar] = useState(false)
const user = useSelector(state => state.users.value.logedInUser)  
const activeUserChats = useSelector(state => state.users.value.activeConversations)  

useEffect(() => {
if(user !== ""){
  setShowToolbar(true)
}

},[user])

function logUserOut(){
  nav("/")
  dispatch(setLoggedInUser(""))
  dispatch(activeChats(0))
  setShowToolbar(false)
}

  return (

    
    <div  className="toolbar">
      {showToolbar && (
        <div>
       <div>
          <button onClick={() => nav("/userprofile")}>Profile</button>
          <button onClick={() => nav("/allusers")}>All Users</button>
          <button onClick={() => nav("/conversations")} >Conversations ({activeUserChats}) </button>
        </div>
        <div>
        
          <button onClick={logUserOut}>Logout</button>
        </div>
      </div>
        
        
        
      )}
      
      
       
    </div>
  )
}

export default Toolbar