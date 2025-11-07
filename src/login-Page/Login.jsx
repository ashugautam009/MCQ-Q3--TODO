import { useState } from "react"
import './style.css'
import Button from "../to-do/button"
import { Link, useNavigate } from "react-router-dom"

const Login=()=>{
    const navigate=useNavigate()
    const buttonName="Login"
    const[value,Setvalue]=useState([])
    console.log(value )
    //function to set the value of user in state 
    const handlegetvalue=(e)=>{
        Setvalue({...value,[e.target.name]:e.target.value})
    }
    
    const handlelogin=(e)=>{
        e.preventDefault();
        const getlocalstorage=JSON.parse(localStorage.getItem('userName'));
        console.log('getlocalstorage',getlocalstorage)

        const fidnuserexistorNot=getlocalstorage.find((check)=>{
            if(check.username==value.username && check.password==value.password &&value.username.length>0 && value.password.length>0){
                alert('correct username and password')
                return navigate('/todo')
            }   else{
                return alert(' try again ')
            }     
        })

        
    }

    return(
        <div>
           <h3>Login page </h3>
            <form>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" name="username" onChange={handlegetvalue} />
                <label htmlFor="password">Password</label>
                <input id="password" type="text" name="password"  onChange={handlegetvalue} />
                <Button buttonName={buttonName} onClick={handlelogin}/>
            </form>
            

            <p>If you don't hvae a account <Link to ='/todo'>Click</Link>to Register</p>
        
        </div>
    )
}

export default Login