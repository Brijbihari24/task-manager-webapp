import { setAlert } from "../redux/actions/alert";
import { logout } from "../redux/actions/auth";
export const handleError = (err) => async (dispatch) => {
    if (err.response && err.response.data) {
        const errors = err.response.data.message;
        if (errors === "Not authorized, token failed") {
            console.log("Not Authorized");
            dispatch(logout());
        }
        dispatch(setAlert(errors, "danger"));
    }
};
