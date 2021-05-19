import { FETCH_USER, LOGIN_USER, LOGIN_FAILURE } from "./actiponTypes";

const initialState = {
    isLoggedIn : false,
    loading: false,
    user: {},
    error: ''
}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return{
                ...state,
                isLoggedIn : false,
                loading: true,
                error: null
            };

        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                isLoggedIn : true,
                user : action.payload,
                error: ''
            }    

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: true,
                isLoggedIn : false,
                user: '',
                error: action.payload
            }    
    }
    return state;
}

export default loginReducer;