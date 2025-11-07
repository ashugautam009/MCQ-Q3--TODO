import { useState } from "react"
import Button from "../to-do/button"
import { Link, useNavigate } from "react-router-dom"
function Registration(){
    const navigate=useNavigate()
    const buttonName='Registration'
    const[value,Setvalue]=useState([])//state to capture the input

    //function for hold the input value by user in state
    const handlegetChange=(e)=>{
       Setvalue({...value,[e.target.name]:e.target.value})
    }
    console.log('value',value)


    //function for submit with local storage
    const handlesubmit=(e)=>{
        e.preventDefault();
        const previousdatainlocalStorage=JSON.parse(localStorage.getItem('userName')||'[]')
        let arr=[];
        arr=[...previousdatainlocalStorage]
        arr.push(value)
        localStorage.setItem('userName',JSON.stringify(arr))
        navigate('/login')
    }
    return(
        <div>
        <h3>Registration page </h3>
            <form onSubmit={handlesubmit}>
                <label htmlFor="userName">UserName</label>
                <input id="username" type="text" name="username" onChange={handlegetChange} />
                <label htmlFor="password">Passowrd</label>
                <input id="password" type="password" name="password" onChange={handlegetChange} />
                <Button buttonName={buttonName}/>

                <p>If you don't hvae a account <Link to='/login'>Click</Link>to Register</p>
            </form>
        
        </div>
    )
}


export default Registration