import React, { useState, useEffect } from 'react';
import loginCheck from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './login.css'

function Login() {
    var history = useHistory();
    const [formData, setFormData] = useState({ username:'', password:''});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    var data;
    const dispatch = useDispatch();
    

    const loginuser = useSelector(state => state);
    
    console.log(loginuser);
   
    const updateuser = () => {
    
        data = loginuser;

        if (Object.keys(data.user).length === 0 && data.user.constructor === Object) {
            history.push("/");
        } else if (Object.keys(data.user).length > 0 && data.user.constructor === Object) {
            history.push("/profile");
        }

    }
    useEffect(() => {
        updateuser()
    }, [loginuser])

    const handleSubmit = async (e) => {
        setError(true);
        e.preventDefault();
        if (formData.username !== '' && formData.password !== '') {
            dispatch(loginCheck(formData));
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="sign_in">
                    <div className="group">
                        <label htmlFor="username" className="label">UserName</label>
                            <input name="username" type="email" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}  autoComplete="off" />
                            <div>{formData.username.length == 0 && error ? <div className="alertdata">Please enter a Username</div> : null}</div>
                    </div>
                    <br/>
                    <div className="group">
                        <label htmlFor="password" className="label">Password</label>
                        <input name="password" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                        <div>{formData.password.length == 0 && error ? <div className="alertdata">Please enter a Password</div> : null}</div>
                     </div>
                     <br/>
                     <div className="group">
                                    <button className="btn btn-primary button" id="login">{loading ?
                                        <i className="fa fa-spinner fa-spin" style={{ fontSize: 24 }}></i>
                                        : null}
                                  Login</button>
                                </div>
               </div>
            </form>
        </div>
    )
}

export default Login
