import React, {useRef, useState} from 'react'
import {changeUserPhoto, changeUserPassword} from '../features/users'
import { useDispatch, useSelector } from 'react-redux'
const ChangeProfileModal = ({showModal, setShowModal, modChangeImage, setModChangeImage, modChangePass, setModChangePass}) => {
  
    const dispatch = useDispatch()
    const imgref = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()
    const [changesDone, setChangesDone] = useState("")
    
 //close modal   
  function closeModal(){
setShowModal(false)
setModChangeImage(false)
setModChangePass(false)
setChangesDone("")
  }

  // change profile photo
  function changeUserProfilePhoto(){
      const photo = imgref.current.value
      if(imgref.current.value.length > 0){
        dispatch(changeUserPhoto(photo))
        setChangesDone("Photo has been succesfully changed")
      } else {

setChangesDone("Try again, photo has not been changed")
      }
        
  }

  function changePass(){

        if(!passOneRef.current.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#$%^&*_+]).{4,20}$/) || passOneRef.current.value !== passTwoRef.current.value){
       setChangesDone("At least one upper case letter and a special symbol (!@#$%^&*_+) should be included or passwords do not match")
   } else {
       const newPassword = passOneRef.current.value
       dispatch(changeUserPassword(newPassword))
       setChangesDone("Password has been succesfully changed")
   }
  }

  
  
  
    return (
    <div style={{display: showModal? "flex" : "none"}} className="modal">

  <div className="modal-content">
    <span onClick={closeModal} className="close">&times;</span>
{modChangeImage && (
    <div className="modaltext">
        <h3>Change your profile picture</h3>
        <input ref={imgref} type="text" placeholder="photo url" />
        <button onClick={changeUserProfilePhoto}>Change image</button>
        {changesDone !== "" ? (
<p>{changesDone}</p>
        ) : <p></p> }
    </div>
)
}
{modChangePass && (
    <div className="modaltext">
        <h3>Change your password</h3>
        <input ref={passOneRef} type="text" placeholder="password 1" />
        <input ref={passTwoRef} type="text" placeholder="password 2" />
        <button onClick={changePass}>Change password</button>
        {changesDone !== "" ? (
<p>{changesDone}</p>
        ) : <p></p> }
    </div>
)
}

    
  </div>

</div>
  )
}

export default ChangeProfileModal