import React, {useState} from 'react'
import admins from '../../data/admins';

const Login = props => {
    const [username, setUser] = useState();
    const [password, setPass] = useState();
    const [alert, setAlert] = useState();
    const [style, setStyle] = useState();

    const authenticationLogin = e =>{
        e.preventDefault();
        if (!username || !password) {
            setAlert('Please, fill the field');
            setStyle('alert alert-danger');
        }else{
            if (username === admins[0].username && password === admins[0].password) {
                props.history.push('/admin');
            }else{
                setAlert('username or password is wrong!');
                setStyle('alert alert-danger');
            }
        }
    }
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>

        <h1 className='text-center'>Login</h1>
        <h6 className={`text-center ${style}`}>{alert}</h6>
        <form className='col-6 mt-5' onSubmit={authenticationLogin}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Username</label>
    <input onChange={(e)=>{setUser(e.target.value)}} type="text" autoComplete="off" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* {username} */}
    <div id="emailHelp" className="form-text">We'll never share your username with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(e)=>{setPass(e.target.value)}} type="password" autoComplete="off" className="form-control" id="exampleInputPassword1"/>
    {/* {password} */}
  </div>

  <button type="submit" className="btn btn-primary">Enter</button>
</form>
    </div>
  )
}

export default Login