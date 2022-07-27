import React from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { setUserClicked } from '../features/users'
import SingleUser from '../components/SingleUser'

const AllUsersPage = () => {
const nav = useNavigate()
const dispatch = useDispatch()
const allUsers = useSelector(state => state.users.value.userArray)  

function openUser(id){
  nav("/user/" + id)
  let clickedUser = allUsers.find(x => x.userID === id )
  dispatch(setUserClicked(clickedUser))
}



  return (
    <div className="allusers">
        {allUsers.map((x,i) => <SingleUser user={x} key={i} openUser={() => openUser(x.userID)}/>)}
    </div>
  )
}

export default AllUsersPage