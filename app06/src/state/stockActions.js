
/* action types */
export const ADD_ITEM = "Add item";
export const DEL_ITEM = "Delete item";
export const UPD_ITEM = "Update item";
export const MARK_EDIT_ITEM = "Mark an item editable";
export const UNMARK_EDIT_ITEM = "UnMark an item editable";

/* action creator methods */

export const createAddItemAction = item => ({ type: ADD_ITEM, item });
export const createDeleteItemAction = id => ({ type: DEL_ITEM, id });
export const createUpdateItemAction = item => ({ type: UPD_ITEM, item });
export const createMarkItemEditableAction = id => ({ type: MARK_EDIT_ITEM, id });
export const createUnMarkITemItemEditableAction = id => ({ type: UNMARK_EDIT_ITEM, id });
