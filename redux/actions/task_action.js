import api from "@/utility/api";
import {
    GET_TASKS_STATED,
    GET_TASKS,
    GET_TASKS_ENDED,
    ADD_TASK_STATED,
    ADD_TASK,
    ADD_TASK_ENDED,
    EDIT_TASK_STATED,
    EDIT_TASK,
    EDIT_TASK_ENDED,
    GET_TASK_STATED,
    GET_TASK,
    GET_TASK_ENDED,
    GET_ALL_TASKS_STATED,
    GET_ALL_TASKS,
    GET_ALL_TASKS_ENDED,
} from "../types/task_type";
import * as qs from "qs";
import { handleError } from "../../shared/handleError";
import { setAlert } from "./alert";

export const addTask = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_TASK_STATED,
        });
        const { data } = await api.post(`/tasks`, formData);
        dispatch({
            type: ADD_TASK,
            payload: data,
        });
        dispatch({
            type: ADD_TASK_ENDED,
        });
    } catch (error) {
        dispatch({
            type: ADD_TASK_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getTasks =
    ({ pageNumber = "" }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: GET_TASKS_STATED,
                });
                const queryParams = qs.parse(window.location.search.replace("?", ""));
                const query = qs.stringify(queryParams, {
                    encodeValuesOnly: true, // prettify url
                });

                const { data } = await api.get(`/tasks?&${query}`);

                dispatch({
                    type: GET_TASKS,
                    payload: data,
                });
                dispatch({
                    type: GET_TASKS_ENDED,
                });
            } catch (error) {
                dispatch({
                    type: GET_TASKS_ENDED,
                });
                dispatch(handleErrorLocal(error));
                dispatch(handleError(error));
            }
        };
export const getTask = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_TASK_STATED,
        });
        const { data } = await api.get(`/tasks/${id}`);

        dispatch({
            type: GET_TASK,
            payload: data,
        });
        dispatch({
            type: GET_TASK_ENDED,
        });
    } catch (error) {
        dispatch({
            type: GET_TASK_STATED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const editTask = (id, formData) => async (dispatch) => {
    try {
        dispatch({
            type: EDIT_TASK_STATED,
        });
        const { data } = await api.put(`/tasks/${id}`, formData);
        dispatch({
            type: EDIT_TASK,
            payload: data,
        });
        dispatch({
            type: EDIT_TASK_ENDED,
        });
    } catch (error) {
        dispatch({
            type: EDIT_TASK_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const deleteTask = (id) => async (dispatch) => {
    try {
        const { data } = await api.delete(`/tasks/${id}`);
        dispatch(setAlert("Task Deleted Successfully", "success"));
    } catch (error) {
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getAllTasks =
    ({ term, value }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: GET_ALL_TASKS_STATED,
                });
                const { data } = await api.get(
                    `/tasks/all?term=${term}&value=${value}`
                );

                dispatch({
                    type: GET_ALL_TASKS,
                    payload: data,
                });
                dispatch({
                    type: GET_ALL_TASKS_ENDED,
                });
            } catch (error) {
                dispatch({
                    type: GET_ALL_TASKS_ENDED,
                });
                dispatch(handleErrorLocal(error));
                dispatch(handleError(error));
            }
        };

export const handleErrorLocal = () => async (dispatch) => { };
