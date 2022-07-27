import React from 'react'
import { useSelector } from 'react-redux'

const SingleMessage = ({message}) => {

const user = useSelector(state => state.users.value.logedInUser)  
  



  return (


    <div className="singlemessage "  >
        {message.sender === user[0].userName ? (
            <div className="innermessage sendermsg"  >
                <div>{message.text}</div>
                <img src={user[0].userImage} alt="" />
                
            </div>
           
        )
        : (
            <div className="innermessage receivermsg" >
                <img src={message.senderImage} alt="" />
                <div>{message.text}</div>
                
            </div>
        )
         
        }
        
    </div>

  )
}

export default SingleMessage