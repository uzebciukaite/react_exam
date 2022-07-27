import {useState} from 'react'
import { useSelector } from 'react-redux'
import ChatModal from '../components/ChatModal'


const SingleUserPage = () => {

const [chatModalOpen, setChatModalOpen] = useState(false)   

const user = useSelector(state => state.users.value.logedInUser)  
const clickedUser = useSelector(state => state.users.value.userClicked)  
 
  return (
    <div className="profile">
        <div className="profileimg">
            <img src={clickedUser.userImage} alt="userpicture" />
        </div>
        <div className="profileright">
            <h3>User: {clickedUser.userName}</h3>
          {user[0] !== clickedUser && (
<button onClick={() => setChatModalOpen(true)}>SEND MESSAGE</button>
          )}  
            
            
        </div>
        <ChatModal chatModalOpen={chatModalOpen} setChatModalOpen={setChatModalOpen} />
        
    </div>
  )
}

export default SingleUserPage