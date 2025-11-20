import { useState } from "react"
import Button from "./button"
import ListItem from "./list-item"
import UserInput from "./user-input"
import './style.css'
import { useNavigate } from "react-router-dom"
const Todo=(props)=>{
    const{data,Setdata,AddButtonName,DeleteButtonName,EditButtonName}=props
    const navigate=useNavigate()
    

    //capture the title enter by usrer state
    const[getuserinput,Setgetuserinpput]=useState('')

    //function to set the state which is enter by user
    function handleUserinput(e){
        Setgetuserinpput(e.target.value)
    }


    //function to delete 
    function DeleteuserClick(id){
        console.log('clicked',id)
        const RemoveDeltedItem=data.filter((check)=>{
            return check.id!==id
        })
        Setdata(RemoveDeltedItem)
    }

    //function to Add Task 
    function Addtask(){
       const fakeData={
        id:Math.random()*1000,
        text:getuserinput,
        completed:true

       }

       Setdata([...data,fakeData])
       Setgetuserinpput('')
    }
    console.log('data**',data);


    //function to Edit 

    function EdituserClick(id){
        navigate(`/edit/${id}`);
    }

    return(
        <div>
            <p>Todo</p>
                <div className="todo">
                    <UserInput AddButtonName={AddButtonName} handleUserinput={handleUserinput} getuserinput={getuserinput} Addtask={Addtask}/>
                    <ListItem data={data} DeleteButtonName={DeleteButtonName} EditButtonName={EditButtonName} DeleteuserClick={DeleteuserClick} EdituserClick={EdituserClick} />
                </div> 
        </div>
    )
}


export default Todo