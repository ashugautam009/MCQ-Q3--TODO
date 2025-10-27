
import Button from "../button"

const UserInput=(props)=>{
    const {AddButtonName,handleUserinput,getuserinput,Addtask}=props

    const getuserinputValue=(e)=>{
        handleUserinput(e)
    }
    
    return(
        <div>
            
            <input type="text" value={getuserinput} onChange={(e)=>getuserinputValue(e)}></input>
            <Button buttonName={AddButtonName} onClick={Addtask}/>
        </div>
    )
}

export default UserInput