import { useState } from "react"
import Button from "./button"
import ListItem from "./list-item"
import UserInput from "./user-input"

const Todo=(props)=>{
    const{fakeData,AddButtonName,DeleteButtonName}=props

    //Set the fake data set here
    const[data,Setdata]=useState(fakeData)

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
       console.log('fakeDat',fakeData)

       Setdata([...data,fakeData])
    }


    return(
        <div>
            <p>Todo</p>
                <div>
                    <UserInput AddButtonName={AddButtonName} handleUserinput={handleUserinput} getuserinput={getuserinput} Addtask={Addtask}/>
                    <ListItem data={data} DeleteButtonName={DeleteButtonName} DeleteuserClick={DeleteuserClick} />
                </div> 
        </div>
    )
}


export default Todo