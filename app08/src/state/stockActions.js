
/* action types */
export const MARK_EDIT_ITEM = "Mark an item editable";
export const UNMARK_EDIT_ITEM = "UnMark an item editable";

export const WAIT = "wait";
export const ERR = "error";
export const REFRESH = "refresh data";

/* action creator methods */

export const createMarkItemEditableAction = id => ({ type: MARK_EDIT_ITEM, id });
export const createUnMarkITemItemEditableAction = id => ({ type: UNMARK_EDIT_ITEM, id });

export const createWaitAction = waitMsg => ({type:WAIT, waitMsg});
export const createErrorAction = errMsg => ({type:ERR, errMsg});
export const createRefreshStockAction = stock => ({type:REFRESH, stock});