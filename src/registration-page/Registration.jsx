import { useState } from "react"

function Registration(){
    const[value,Setvalue]=useState([])//state to capture the input

    //function for hold the input value by user in state
    const handlegetChange=(e)=>{
       Setvalue({...value,[e.target.name]:e.target.value})
    }
    console.log('value',value)


    //function for submit with local storage
    const handlesubmit=(e)=>{
        e.preventDefault();
        
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label htmlFor="userName">UserName</label>
                <input id="username" type="text" name="username" onChange={handlegetChange} />
                <label htmlFor="password">Passowrd</label>
                <input id="password" type="password" name="password" onChange={handlegetChange} />
                <button type="submit">Registration</button>
            </form>
        
        </div>
    )
}


export default Registration