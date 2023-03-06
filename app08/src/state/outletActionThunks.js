
import axios from 'axios';

import { createErrorAction, createWaitAction, createRefreshOutletsAction, createLoadOutletByIdAction } from './outletActions';

const apiUrl = "http://localhost:7777/outlets";

export const createLoadOutletsActionThunk = () => dispatch => {
    dispatch(createWaitAction("Please wait while refreshing data..."));
    axios.get(apiUrl)
        .then(resp => dispatch(createRefreshOutletsAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrorAction("Failed to load data,Please retry later!")); })
};

export const createLoadOutletByIdActionThunk = id => dispatch => {
    dispatch(createWaitAction("Please wait while loading data..."));
    axios.get(apiUrl + "/"+id)
        .then(resp => dispatch(createLoadOutletByIdAction(resp.data)))
        .catch(err => { console.log(err); dispatch(createErrorAction("Failed to load data,Please retry later!")); })
};

export const createAddOutletActionThunk = outlet => dispatch => {
    dispatch(createWaitAction("Please wait while adding a record..."));
    axios.post(apiUrl, outlet)
        .then(resp => createLoadOutletsActionThunk()(dispatch))
        .catch(err => { console.log(err); dispatch(createErrorAction("Failed to add the record,Please retry later!")); })
};

export const createUpdateOutletActionThunk = outlet => dispatch => {
    dispatch(createWaitAction("Please wait while updating a record..."));
    axios.put(apiUrl+"/"+outlet.id, outlet)
        .then(resp => createLoadOutletsActionThunk()(dispatch))
        .catch(err => { console.log(err); dispatch(createErrorAction("Failed to update the record,Please retry later!")); })
};

export const createDeleteItemActionThunk = id => dispatch => {
    dispatch(createWaitAction("Please wait while removing a record..."));
    axios.delete(apiUrl+"/"+id)
        .then(resp => createLoadOutletsActionThunk()(dispatch))
        .catch(err => { console.log(err); dispatch(createErrorAction("Failed to remove the record,Please retry later!")); })
};
