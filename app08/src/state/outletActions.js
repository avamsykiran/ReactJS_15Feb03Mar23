/*action types */

export const WAIT = "wait for outlets";
export const ERR = "error in outlets";
export const REFRESH = "refresh outlets data";

/* action creator methods */

export const createWaitAction = waitMsg => ({type:WAIT, waitMsg});
export const createErrorAction = errMsg => ({type:ERR, errMsg});
export const createRefreshOutletsAction = outlets => ({type:REFRESH, outlets});