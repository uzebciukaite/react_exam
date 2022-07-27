import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        value: {
            userArray: [],
            logedInUser: "",
            userClicked: "",
            chatArray: [],
            activeConversations: 0
        }
    },
    reducers: {
        addUser: (state, action) => {
          state.value.userArray.push(action.payload)
            
        },
        setLoggedInUser: (state,action) => {
            state.value.logedInUser = action.payload
        },

        changeUserPhoto: (state, action) => {
            let userIsregistered = state.value.userArray.filter(x => x.userName === state.value.logedInUser[0].userName)
            userIsregistered[0].userImage = action.payload
            state.value.logedInUser[0].userImage = action.payload
        },
        changeUserPassword: (state, action) => {
            let userIsregistered = state.value.userArray.filter(x => x.userName === state.value.logedInUser[0].userName)
            userIsregistered[0].passOne = action.payload
            userIsregistered[0].passTwo = action.payload
            state.value.logedInUser[0].passOne = action.payload
            state.value.logedInUser[0].passTwo = action.payload

        },
        setUserClicked: (state,action) => {
            state.value.userClicked = action.payload
        },
        addMessagetoChat: (state, action) => {
            state.value.chatArray.push(action.payload)
        },
        deleteChat: (state,action) => {
            state.value.chatArray = [...action.payload]
        },
        activeChats: (state,action) => {
            state.value.activeConversations = action.payload
        }
      

    }

        
    

})

export const {addUser, setLoggedInUser, changeUserPhoto, changeUserPassword, setUserClicked, addMessagetoChat, deleteChat, activeChats} = userSlice.actions


export default userSlice.reducer

