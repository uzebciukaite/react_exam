import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import ChangeProfileModal from '../components/ChangeProfileModal'

const ProfilePage = () => {

const user = useSelector(state => state.users.value.logedInUser)   
const [showModal, setShowModal] = useState(false)
const [modChangeImage,setModChangeImage] = useState(false)
const [modChangePass,setModChangePass] = useState(false)


function changePicture(){
    setShowModal(true)
    setModChangeImage(true)

}

function changePassword(){
    setShowModal(true)
    setModChangePass(true)

}

  return (
    <div className="profile">
        <div className="profileimg">
            <img src={user[0].userImage} alt="userpicture" />
        </div>
        <div className="profileright">
            <h3>User: {user[0].userName}</h3>
            <button onClick={changePicture}>change profile picture</button>
            <button onClick={changePassword} >change password</button>
        </div>
        <ChangeProfileModal showModal={showModal} setShowModal={setShowModal} modChangeImage={modChangeImage} setModChangeImage={setModChangeImage} modChangePass={modChangePass} setModChangePass={setModChangePass} />
        
    </div>
  )
}

export default ProfilePage