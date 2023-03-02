
import { WAIT, ERR, REFRESH, MARK_EDIT_ITEM, UNMARK_EDIT_ITEM } from './stockActions';

const initState = () => ({
    stock: undefined,
    errMsg: undefined,
    waitMsg: undefined
});

const stockReducer = (oldState = initState(), action) => {
    let { stock,errMsg,waitMsg } = oldState;

    switch (action.type) {
        case WAIT:
            waitMsg=action.waitMsg;
            errMsg=undefined;
            break;
        case ERR:
            errMsg = action.errMsg;
            waitMsg = undefined;
            break;
        case REFRESH:
            stock = [...action.stock];
            errMsg = undefined;
            waitMsg = undefined;
            break;
        case MARK_EDIT_ITEM:
            stock = stock.map(item => item.id != action.id ? item : { ...item, editable: true });
            break;
        case UNMARK_EDIT_ITEM:
            stock = stock.map(item => item.id != action.id ? item : { ...item, editable: undefined });
            break;
    }

    return { stock,errMsg,waitMsg };
};

export default stockReducer;