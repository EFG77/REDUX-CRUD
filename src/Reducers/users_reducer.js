import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      { name: "Albert", gen: 23, id: 1234 },
      { name: "Samuel", gen: 23, id: 12398 },
      { name: "Hussein", gen: 23, id: 12636 },
      { name: "Bediako", gen: 23, id: 123475 },
      { name: "Nana", gen: 23, id: 12345353 },
    ],

    editUsers: false,
    editData:{},

},




reducers: {
    createUser: (state,action) => {
      state.users=[...state.users,action.payload]
    },
    updateUser: (state,action) => {
      const updatedUsers = state.users.map((item) => {
        if (action.payload.id === item.id) {
          return action.payload;
        } else {
          return item;
        }
      });

      state.users = updatedUsers;

    },


    deleteUser: (state,action) => {
      const newUsers=state.users.filter( (item) => {
         if (item.id!==action.payload) {
         return item
       };
      });
 
      state.users=newUsers;
     },



    editUsers:(state =>{
      if (state.editUsers===true) {
        state.editUsers=false
      }
      if (state.editUsers===false) {
        state.editUsers=true
      }
    
      }),

      editData:(state,action)=>{
        state.editData=action.payload  
        },
  
  },


});


export const { createUser, updateUser, deleteUser, editUsers, editData } =
  usersSlice.actions;

export default usersSlice.reducer;
