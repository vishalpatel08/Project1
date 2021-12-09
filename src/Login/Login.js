import React, {useState} from 'react'
import './style.css'
import {Link, useHistory} from 'react-router-dom'
import Axios from 'axios'

const Login = () => {
    const [user , setUser] = useState({
        email:'',
        password:''
    })
    let History = useHistory();
    const [status, setStatus] = useState("");
    const {email, password}= user;
    const Onchange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    const OnSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3002/login", {
        email: email,
        password: password,
    }).then((response)=>{
        if(response.data.msg){
            setStatus(response.data.msg)
        }else{
            History.push('/frontpage')
        }
    })
    }
    return (
        <div className='outer-div'>
            <div className='inner-div'>
            <h1> Login </h1>
            <form>
                    <div className='c-label'>
                        <label >G-mail</label>
                        <input type='text' name="email" placeholder="gmail" value={email} onChange={(e)=> {Onchange(e)}} className='c-input'/>
                    </div>
                    <div className='c-label'>
                        <label >Password</label>
                        <input type='password' name="password" autoComplete="on" placeholder="Password" value={password} onChange={(e)=> {Onchange(e)}} className='c-input'/>
                    </div>
                    
                <button className='cbtn' onClick={(e)=> {OnSubmit(e)}}> Submit </button>
                <p> New User? <Link to='/reg'>click </Link> for registration</p>
            </form>
            </div>
            <h1>{status}</h1>
        </div>
    )
} 

export default Login