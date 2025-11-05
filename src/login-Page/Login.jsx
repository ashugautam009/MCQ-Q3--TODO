import { useState } from "react"
import './style.css'


const Login=()=>{
    
    const[value,Setvalue]=useState([])

    //function to set the value of user in state 
    const handlegetvalue=(e)=>{
        Setvalue({...value,[e.target.name]:e.target.value})
    }
    

    return(
        <div>
           
            <form>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" name="username" onChange={handlegetvalue} />
                <label htmlFor="password">Password</label>
                <input id="password" type="text" name="password"  onChange={handlegetvalue} />
            </form>
        
        </div>
    )
}

export default Login