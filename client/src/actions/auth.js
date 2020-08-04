import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { toast } from 'react-toastify';

// Register User
export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors && errors.length) {
            errors.forEach(error => {
                toast.warning(error.msg, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
        };

        dispatch({
            type: REGISTER_FAIL
        });
    }
}