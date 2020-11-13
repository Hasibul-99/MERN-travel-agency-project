import axios from 'axios';
import { toast } from 'react-toastify';

import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE
} from './types';
import setAuthToken from "../utils/setAuthToken";

// Get current user profile

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err?.response?.statusText,
                status: err?.response?.status}
        });
    }
};

export const userUpdate = (userData) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    const body = JSON.stringify(userData);

    try {

        console.log('====================================');
        console.log("hello", body);
        console.log('====================================');

        const res = await axios.post('/api/profile', body, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors && errors.length) {
            errors.forEach(error => {
                toast.warning(error.msg, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
        };
    }
}