import Axios from 'axios';
import React, {useState} from 'react'
//import {useHistory} from 'react-router-dom'
import './Project1.css'

const NewUser = ()=>{
    // let History = useHistory();
    const [ user, setUser] = useState({
        name:"",
        shift:"",
    })
    const [status, setStatus] = useState("");
    const {name, shift} = user;
    const onInput = e =>{
        setUser({...user,[e.target.name]: e.target.value}) 
    }

    const onSubmit = async e =>{
        e.preventDefault();
        Axios.post("http://localhost:3002/newuser", {
        username: name,
        shift: shift, 
    }).then((response)=>{
        if(response.data.msg){
        setStatus(response.data.msg)
        }else{
        setStatus(" Succesfully Registered " + response.data)
        console.log(response);
    }
    })
    setUser({name:""});
    }
    return <div className='new-u-out'>
        <div className='new-u-in'>
            <header>
                <h1 className="Newuser"> New User</h1>
            </header>
        <form onSubmit={ e => onSubmit(e)}>
            <div className="row mb-3">
                <label htmlFor="name" className="A-Label">Name</label>
                <div className="i-adduser">
                <input type="text" className="form-control" name="name" value={name} onChange={e => onInput(e)}/>
                </div>
            </div>
            {/* <fieldset className="row mb-3"  onChange={e => onInput(e)}>
                <label className="A-Label">Shifts</label>
                <div className="A-Label">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="shift"  value="1" />
                    <label className="form-check-label" htmlFor="gridRadios1"> 1 Shift</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="shift" value="2" />
                    <label className="form-check-label" htmlFor="gridRadios2">2 Shift</label>
                </div>
                </div>
            </fieldset> */}
            <button type="submit" className="btn-s">Submit</button>
        </form>
            <h1>{status}</h1>
        </div>
    </div>
}

export default NewUser
