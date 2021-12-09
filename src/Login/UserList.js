import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const UserList = () => {
    const [users, setUser] = useState([]);

        useEffect(()=> {
        loadUsers();
        },[]);

        const loadUsers = async () =>{
            Axios.post("http://localhost:3002/list").then((response)=>{
                if(response.data.msg){
                    setUser(response.data.msg)
                }else{
                    setUser(response.data)
                }
            })
        }

        const onDelete = async (e, idd) => {
            e.preventDefault()
            Axios.post("http://localhost:3002/delete", { idd:idd }).then((response)=>{})
            loadUsers();
        }
    return(
        <div className="ul-out">
            <Link to="/">
            <div className="backbutton"></div>
            </Link>
        <div className='ul-container'>
            <table className="table">
                <thead className='ul-head'>
                    <tr>
                    <th scope="col">Serial</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>(
                            <tr>
                                <td scope="row" >{index+1}</td>
                                <td><Link to={`/userdata/${user.Id}`}> {user.Name}</Link></td>
                                <td><button type="submit" className="btn btn-primary" onClick={e => onDelete(e, user.Id)}> Delete </button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default UserList
