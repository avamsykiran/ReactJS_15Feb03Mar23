/*action types */

export const WAIT = "wait for outlets";
export const ERR = "error in outlets";
export const REFRESH = "refresh outlets data";
export const LOAD_BY_ID = "refresh current outlet";

/* action creator methods */

export const createWaitAction = waitMsg => ({type:WAIT, waitMsg});
export const createErrorAction = errMsg => ({type:ERR, errMsg});
export const createRefreshOutletsAction = outlets => ({type:REFRESH, outlets});
export const createLoadOutletByIdAction = outlet => ({type:LOAD_BY_ID, outlet});