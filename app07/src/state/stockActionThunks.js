
import axios from 'axios';

import { createErrorAction, createWaitAction, createRefreshStockAction } from './stockActions';

const apiUrl = "http://localhost:7777/stock";

export const createLoadStockActionThunk = () => dispatch => {
    dispatch(createWaitAction("Please wait while refreshing data..."));
    axios.get(apiUrl)
        .then(resp => dispatch(createRefreshStockAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrorAction("Failed to load data,Please retry later!")); })
};

export const createAddItemActionThunk = item => dispatch => {
    dispatch(createWaitAction("Please wait while adding a record..."));
    axios.post(apiUrl, item)
        .then(resp => createLoadStockActionThunk()(dispatch))
        .catch(err => { console.log(err); dispatch(createErrorAction("Failed to add the record,Please retry later!")); })
};

export const createUpdateItemActionThunk = item => dispatch => {
    dispatch(createWaitAction("Please wait while updating a record..."));
    axios.put(apiUrl+"/"+item.id, item)
        .then(resp => createLoadStockActionThunk()(dispatch))
        .catch(err => { console.log(err); dispatch(createErrorAction("Failed to update the record,Please retry later!")); })
};

export const createDeleteItemActionThunk = id => dispatch => {
    dispatch(createWaitAction("Please wait while removing a record..."));
    axios.delete(apiUrl+"/"+id)
        .then(resp => createLoadStockActionThunk()(dispatch))
        .catch(err => { console.log(err); dispatch(createErrorAction("Failed to remove the record,Please retry later!")); })
};
