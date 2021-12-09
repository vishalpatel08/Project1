import './App.css';
import Registration from './Login/Reg'
import Login from './Login/Login'
import UserData from './Login/UserData'
import UserList from './Login/UserList'
import NewUser from './Login/AddUser'
import Frontpage from './Login/Frontpage'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ''}>
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path='/' component={Frontpage} />
        <Route exact path='/reg' component={Registration} />
        {/* <Route exact path='/Frontpage' component={Frontpage} /> */}
        <Route exact path='/adduser' component={NewUser}/>
        <Route exact path='/userdata/:id' component={UserData}/>
        <Route exact path='/userlist' component={UserList}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
