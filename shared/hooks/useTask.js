import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addTask,
    getTasks,
    getTask,
    editTask,
    deleteTask,
    getAllTasks,
} from "@/redux/actions/task_action"
import _debounce from "lodash/debounce";
// import { useSelectAllCollection } from "./UseCollection";

// Get All Data
export const useAllTasks = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.task);
    const [pageNumber, setPageNumber] = useState(1);
    const [deleteEntry, setDeleteEntry] = useState(null);

    useEffect(() => {
        if (deleteEntry) {
            dispatch(deleteTask(deleteEntry));
        }
        allQuery();
    }, [deleteEntry, pageNumber, window.location.search]);
    const allQuery = useCallback(
        _debounce(() => {
            dispatch(getTasks({}));
        }, 1000),
        []
    );

    const deleteBtnClicked = async (id) => {
        setDeleteEntry(id);
    };

    return [data, setPageNumber, deleteBtnClicked];
};

// Get Single Data
export const useSingleTask = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.task);
    useEffect(() => {
        dispatch(getTask(id));
    }, [id]);
    return [data];
};
// Add Data
export const useCreateTask = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.task);
    const addData = async (data) => {
        await dispatch(addTask(data));
    };
    return [data, addData];
};
export const useUpdateTask = () => {
    const dispatch = useDispatch();
    // const data = useSelector((state) => state.task);
    const updateData = async (id, data) => {
        await dispatch(editTask(id, data));
    };
    return [updateData];
};

export const useSelectAllTask = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const [value, setValue] = useState("");
    const data = useSelector((state) => state.task);
    useEffect(() => {
        dispatch(getAllTasks({ term, value }));
    }, [term, value]);
    return [data, setTerm, setValue];
};

export const useGetDropdownOptions = () => {
    // const [collection, setCollectionSearchField, setCollectionSearchValue] =
    //     useSelectAllCollection();

    const [dropdownOptions, setDropdownOptions] = useState({});
    // useEffect(() => {
    //     if (collection && collection.all_collections) {
    //         const newData = collection.all_collections.map((item) => {
    //             return { label: item.name, value: item._id };
    //         });
    //         setDropdownOptions({ ...dropdownOptions, service_collection: newData });
    //     }
    // }, [collection]);
    const loadOptions = async (inputValue, callback, field) => {
        // if (field == "parent_category") {
        //   await setCategorySearchField("name");
        //   await setCategorySearchValue(inputValue);
        //   callback(dropdownOptions.parent_category);
        // }
    };

    return [dropdownOptions, loadOptions];
};
