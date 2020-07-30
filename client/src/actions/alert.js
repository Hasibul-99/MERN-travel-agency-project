import { v1 as uuid } from 'uuid';
import {SET_ALERT} from './types';
// REMOVE_ALERT
export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid();

    dispatch({
        type: SET_ALERT,
        payload: {msg, alertType, id}
    });
}