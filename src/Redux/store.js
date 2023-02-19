import { configureStore } from '@reduxjs/toolkit'
import users_reducer from   '../Reducers/users_reducer'
import teacher_reducer from '../Reducers/teacher_reducer'




export default configureStore({
  reducer: {
    students: users_reducer,
    teachers: teacher_reducer,
  },
})