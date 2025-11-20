import { useNavigate, useParams } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

const EditUser=(props)=>{
    const {data,Setdata}=props
    
    const navigate=useNavigate()
    const{id}=useParams()
    const Numberid=Number(id)
   const find_user=data.find((check)=>{
    return check.id==Number(id)
   })

   const[text,Settext]=useState(find_user.text)
   
   console.log('find suer',find_user)

   //function to update 
   function handleEditupdate(){
    const updatedArray =data.map((check)=>{
        if(check.id==Numberid){
            return {...check,text:text}
        }
        return check
    })
    Setdata(updatedArray)
    navigate('/todo')
   }

   function handlechangeinUI(e){
    Settext(e.target.value)
   }

    return(
        <div>
        <p>Editing Activity is {Numberid}</p>
            <label>Title</label>
            <input type="text" value={text} onChange={handlechangeinUI}/>
            <button onClick={handleEditupdate}>update</button>
        </div>
    )
}

export default EditUser