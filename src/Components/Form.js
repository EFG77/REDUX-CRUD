import React, {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { createUser,updateUser,editUsers } from '../Reducers/users_reducer';

const Form = () => {
    const dispatch=useDispatch();
    const edit=useSelector((state)=>state.students);

    const [editName, setEditName]=useState();
    const[editGen,setEditGen]=useState();

    const [name, setName]=useState("");
    const[gen,setGen]=useState("");

    console.log(edit);

    const userEdit = edit.editUsers;


    useEffect(() => {
        const seteditStates = () => {
          setEditName(edit.editData.name);
          setEditGen(edit.editData.gen);
        };
        seteditStates();
      }, [userEdit,edit.editData.name,edit.editData.gen]);
    
 
const handleSubmit=(e)=>{
e.preventDefault();
const newStudent={
    name: name,
    gen:  gen,
    id:   Math.floor(Math.random()*1000),
  };
dispatch(createUser(newStudent));
setName("");
setGen("");

};

const handleEdit=(e)=>{
    e.preventDefault();
    const updateDetails = {
        name: editName,
        gen: editGen,
        id: edit.editData.id,
      };
      dispatch(updateUser(updateDetails));
  
      dispatch(editUsers());
      setEditGen("");
      setEditName("");

};

  return (
    <div>
        {
            userEdit?( <form onSubmit={handleEdit}>
                <input 
                placeholder='name'
                value={editName} 
                onChange={(e)=>{
                    setEditName(e.target.value);
                    }}
                    />
                    <br/>
                    <br/>
                <input 
                placeholder='gen' 
                value={editGen} 
                onChange={(e)=>{
                    setEditGen(e.target.value);
                    }}
                    />
                    <br/>
                    <br/>
                    <button>Submit</button>
                    </form>):(<form onSubmit={handleSubmit}>
        <input 
        placeholder='name'
        value={name} 
        onChange={(e)=>{
            setName(e.target.value);
            }}
            />
            <br/>
            <br/>
        <input 
        placeholder='gen' 
        value={gen} 
        onChange={(e)=>{
            setGen(e.target.value);
            }}
            />
            <br/>
            <br/>
            <button>Submit</button>
            </form>)
        }
         </div>
  )
}

export default Form






