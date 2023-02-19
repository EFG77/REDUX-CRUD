import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser,editUsers,editData } from '../Reducers/users_reducer';

const List = ({students}) => {
    const dispatch=useDispatch()
  return (
    <div>
     <h2>{students.name}</h2>
     <h3>{students.gen}</h3>

     <button onClick={(e)=>{
        dispatch(editUsers());
        dispatch(editData(students));
    }}
        >Edit</button>

     <button onClick={(e)=>{dispatch(deleteUser(students.id))}}>Delete</button>
    </div>
  )
}

export default List;
