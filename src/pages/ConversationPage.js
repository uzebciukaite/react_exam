
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SingleChat from '../components/SingleChat'
import { deleteChat, activeChats } from '../features/users'


const ConversationPage = () => {
const dispatch = useDispatch()
const allmessages = useSelector(state => state.users.value.chatArray)    
const user = useSelector(state => state.users.value.logedInUser)  
const messagearr = [...allmessages]
let allchatnames = []
let activeConversations = []
let logedInuserchats = messagearr.filter(x => x.chatParticipants.includes(user[0].userName))

// show individual conversations



logedInuserchats.map(x => {
    allchatnames.push(x.chatParticipants)
    const merged = [].concat.apply([], allchatnames);        
    activeConversations = [... new Set(merged)]
    const indexOfUser = activeConversations.indexOf(user[0].userName)
    
    activeConversations.splice(indexOfUser, 1)  
    
}     
)

useEffect(()=> {
  
    dispatch(activeChats(activeConversations.length))
    

},[activeConversations])




//delete entire conversation
function deleteConversation(name){
      let filteredmessages = messagearr.filter(x => (x.sender === user[0].userName && x.receiver === name) || (x.sender === name && x.receiver === user[0].userName)) 

      const messagestodelete = new Set(filteredmessages)
      const newArray = messagearr.filter((message) => {
        return !messagestodelete.has(message)
      })

      dispatch(deleteChat(newArray))
}



  return (
    <div className="userchatcont">
        {activeConversations.map((x, i) => <SingleChat chat={x} key={i}  deleteConversation={() => deleteConversation(x)}   />   )}
    </div>
  )
}

export default ConversationPage