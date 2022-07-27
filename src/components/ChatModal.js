import React, {useRef} from 'react'
import { FaChevronRight} from 'react-icons/fa';
import Conversation from './Conversation';
import { useDispatch, useSelector } from 'react-redux';
import { addMessagetoChat } from '../features/users';
import { useNavigate } from 'react-router';

const ChatModal = ({setChatModalOpen, chatModalOpen, setChatConvModalOpen, chatConvModalOpen}) => {
   const messageref = useRef()
   const user = useSelector(state => state.users.value.logedInUser)  
   const clickedUser = useSelector(state => state.users.value.userClicked)   
   const dispatch = useDispatch()
   const nav = useNavigate()

   function sendMessage(){
      const d = new Date() 
      

        if(messageref.current.value.length > 0){
                const newMessage ={
            text: messageref.current.value,
            sender: user[0].userName,
            senderImage: user[0].userImage,
            receiver: clickedUser.userName,
            chatParticipants: [ user[0].userName, clickedUser.userName],
            timeAdded:  d.getHours() + ":" + d.getMinutes()
        }

        dispatch(addMessagetoChat(newMessage))
        }
       


   }

   function closechatModal(){

    if(chatConvModalOpen){
      setChatConvModalOpen(false)
      nav("/conversations")
    }
    else if(chatModalOpen){
      setChatModalOpen(false)
      nav("/allusers")
    } 
    
    

   }

  return (
    <div style={{display: chatModalOpen || chatConvModalOpen ? "flex" : "none"}}  className="modal">
 
        <div className="chat-modal-content" >
         <span onClick={closechatModal} className="close">&times;</span>  
    <div className="conversation">
        <Conversation/>
        <div className="inputtext">
            <input ref={messageref} type="text" placeholder= "write something here..." />
            <div onClick={sendMessage} className="sendIcon">
            <FaChevronRight />
            </div>
            
        </div>
        
    </div>
  </div>
  </div>
  )
}

export default ChatModal