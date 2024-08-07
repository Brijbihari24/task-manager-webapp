import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../types/alert_type";

export const setAlert =
    (msg, alertType, timeout = 10000) =>
        (dispatch) => {
            const id = uuidv4();
            dispatch({
                type: SET_ALERT,
                payload: { msg, alertType, id },
            });

            setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
        };

export const removeAlert = (id) => (dispatch) => {
    dispatch({ type: REMOVE_ALERT, payload: id });
};
