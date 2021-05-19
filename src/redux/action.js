import { FETCH_USER, LOGIN_USER, LOGIN_FAILURE } from "./actiponTypes";
import { baseUrl } from './api'


export const fetchuser = () => {
    return {
        type: FETCH_USER,
    }
}

export const loginuser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export const loginfailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}


const loginCheck = (data) => {
    console.log(`${baseUrl.apiUrl}/admin`);
    

    return (dispatch) => {
        dispatch(fetchuser());
       
        fetch('http://localhost:3000/admin')
        .then(response => response.json())
        .then(dat => {
            var obj;
            var error = "Wrong credential"
            if (obj = dat.find(logindata => logindata.username === data.username && logindata.password === data.password)){
                dispatch(loginuser(obj));
            } else if (dat.find(logindata => logindata.username !== data.username || logindata.password === data.password)){
                dispatch(loginfailure(error));
            }
        } )
     }
}

export default loginCheck;