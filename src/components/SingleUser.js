import React from 'react'
import users from '../features/users'

const SingleUser = ({user, openUser}) => {
  return (
    <div onClick={openUser} className="singleuser">
        <img src={user.userImage} alt="" />
        <h4>{user.userName}</h4>
    </div>
  )
}

export default SingleUser