import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import SingleMessage from './SingleMessage'

const Conversation = () => {

const allmessages = useSelector(state => state.users.value.chatArray)    
const user = useSelector(state => state.users.value.logedInUser)  
const clickedUser = useSelector(state => state.users.value.userClicked)   
const copyarr = [...allmessages]

let filteredmessages = copyarr.filter(x => (x.sender === user[0].userName && x.receiver === clickedUser.userName) || (x.sender === clickedUser.userName && x.receiver === user[0].userName)) 

   
  return (
    <div className="chatcontainer">
        {filteredmessages.map((x, i ) =>  <SingleMessage message={x} key={i}/> )}
        </div>
  )
}

export default Conversation