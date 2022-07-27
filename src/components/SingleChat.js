import {useState} from 'react'
import ChatModal from './ChatModal'
import { useDispatch, useSelector } from 'react-redux'
import { setUserClicked } from '../features/users'

const SingleChat = ({chat, deleteConversation}) => {
 const dispatch = useDispatch()
 const [chatConvModalOpen, setChatConvModalOpen] = useState(false) 
 const allUsers = useSelector(state => state.users.value.userArray)  

 function openModal(){
   setChatConvModalOpen(true)
   let clickedUser = allUsers.find(x => x.userName === chat )
  dispatch(setUserClicked(clickedUser))
 }
 
  return (
    <div className="chatcard">
<h2>Chat with {chat}</h2>

<div>
<button onClick={openModal}>Open chat</button>
<div onClick={deleteConversation} className="deleteconversation"> X </div>
</div>

<ChatModal chatConvModalOpen={chatConvModalOpen} setChatConvModalOpen={setChatConvModalOpen} />
    </div>
    
  )
}

export default SingleChat