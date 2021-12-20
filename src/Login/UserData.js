import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';

const UserData = () => {
    // let History = useHistory();
    const [users, setUsers] = useState({
        date:[]
    });

    const [sum, setSum] = useState(0);
    
    useEffect(()=> {    
        loadUsers();    
    },[]);

    const {id} = useParams();
    const{date, name}=users;
        const loadUsers = async () =>{
            // Axios.post('http://localhost:3002/data',{id:id} ).then(response =>{
            //     if(response.data.msg)
            //     setUsers(response.data.msg)
            //     else
            //     {
            //         if(response.data)
            //         setUsers(response.data)
            //         else
            //         setUsers("NO DATA!")
            //     }
            // })
            const result = await Axios.get(`https://my-json-server.typicode.com/vishalpatel08/JsonServer/users/${id}`);
            setUsers(result.data);
        }
        const onInput1 = (e, i) =>{
            // users[i].Amount= e.target.value;
            date[i].amount= e.target.value;
        }
        const onInput2 = (e, i) =>{
            // users[i].fat= e.target.value;
            date[i].fat= e.target.value;
        }

        const onSubmit = async (e, ddt) =>{
            e.preventDefault();
            // Axios.post(`http://localhost:3002/dataupdate`,{ user: users[ddt-1], id:id }).then(response =>{});
            await Axios.put(`https://my-json-server.typicode.com/vishalpatel08/JsonServer/users/${id}`, users);
            loadUsers();
            calC();
        }
        const calC = () => {
            let k=0
            // users.map((user, index)=>(
            //     k += Number(((user.Amount)*(user.fat)*6.5).toFixed(1))
            // ))
            date.map((user, index)=>(
                k += Number(((user.amount)*(user.fat)*6.5).toFixed(1))
            ))

            setSum(k);
        }
    return(
        <div>
            <Link to="/userlist">
            <div className="backbutton"></div>
            </Link>
        <div className="ud-out">
        <div className="ud-container">
            <table className="table">
                <thead >
                    <tr className="ud-list">
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">F</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        date.map((user, index)=>(
                            <tr>
                                <td scope="row" >{user.Date}</td>
                                <td><input type="number" placeholder={user.amount} name="amount" style={ {color:"red", border:"none"}}  onChange ={e => onInput1(e, index)}/></td>
                                <td><input type="number" placeholder={user.fat} name="fat" style={ {color:"red", border:"none"}} onChange ={e => onInput2(e, index)}/></td>
                                <td>{((user.amount)*(user.fat)*6.5).toFixed(1)}</td>
                                <td><button type="submit" className="btn btn-primary" onClick={e => onSubmit(e, user.Date)}> Submit </button></td>
                            </tr>
                        ))
                    }
                </tbody>
                
            </table>
            <div className="ud-total"> {sum}</div>
        </div>
    </div>
    </div>
    )
}

export default UserData





