import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';

const Students = () => {
    const students=useSelector((state)=>state.students);
    const pupils=students.users;
    console.log(pupils)
  return (
    <div style={{marginLeft:'20px'}}>
        {pupils.map((item)=>{
            return (
            (<div key={item.id}>
               <List students={item}/>
            </div>)
            );
        })}
        </div>
  )
}

export default Students;
