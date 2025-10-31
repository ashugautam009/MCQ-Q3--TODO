
import Button from "../button"
import './style.css'

const UserInput=(props)=>{
    const {AddButtonName,handleUserinput,getuserinput,Addtask}=props

    const getuserinputValue=(e)=>{
        handleUserinput(e)
    }
    
    return(
        <div className="usercss">
            <label htmlFor="button"/>
            <input type="text" value={getuserinput} onChange={(e)=>getuserinputValue(e)} id="button"></input>
            <Button buttonName={AddButtonName} onClick={Addtask}/>
        </div>
    )
}

export default UserInput