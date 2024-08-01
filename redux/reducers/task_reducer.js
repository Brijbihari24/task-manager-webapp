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
    GET_ALL_TASKS_ENDED
} from "../types/task_type";

const initialState = {
    tasks_loading: true,
    tasks: null,
    page: null,
    pages: null,
    total_tasks: 0,

    task: null,
    task_loading: null,

    loading: true,

    task_message: null,
    all_tasks: null,
    all_tasks_loading: null,
    add_task_loading: true,
    edit_task_loading: true
};

export const task_reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_TASKS_STATED:
            return {
                ...state,
                tasks: null,
                pages: null,
                page: null,
                total_tasks: 0,
                tasks_loading: true
            };
        case GET_TASKS:
            return {
                ...state,
                tasks: payload.tasks,
                pages: payload.pages,
                page: payload.page,
                total_tasks: payload.count
            };
        case GET_TASKS_ENDED:
            return {
                ...state,
                tasks_loading: false
            };
        case GET_ALL_TASKS_STATED:
            return {
                ...state,
                all_tasks_loading: true,
                all_tasks: null
            };
        case GET_ALL_TASKS:
            return {
                ...state,
                all_tasks: payload
            };
        case GET_ALL_TASKS_ENDED:
            return {
                ...state,
                all_tasks_loading: false
            };

        case ADD_TASK_STATED:
            return {
                ...state,
                task_message: null,
                add_task_loading: true
            };
        case ADD_TASK:
            return {
                ...state,
                task_message: payload
            };
        case ADD_TASK_ENDED:
            return {
                ...state,
                add_task_loading: false
            };
        case GET_TASK_STATED:
            return {
                ...state,
                task: null,
                task_loading: true
            };
        case GET_TASK:
            return {
                ...state,
                task: payload
            };
        case GET_TASK_ENDED:
            return {
                ...state,
                task_loading: false
            };
        case EDIT_TASK_STATED:
            return {
                ...state,
                task_message: null,
                edit_task_loading: true
            };
        case EDIT_TASK:
            return {
                ...state,
                task_message: payload
            };
        case EDIT_TASK_ENDED:
            return {
                ...state,
                edit_task_loading: false
            };

        default:
            return state;
    }
};
