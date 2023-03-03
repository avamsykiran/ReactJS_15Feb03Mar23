
import { WAIT, ERR, REFRESH } from './outletActions';

const initState = () => ({
    outlets: undefined,
    errMsg: undefined,
    waitMsg: undefined
});

const outletReducer = (oldState = initState(), action) => {
    let { outlets,errMsg,waitMsg } = oldState;

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
            outlets = [...action.outlets];
            errMsg = undefined;
            waitMsg = undefined;
            break;
    }

    return { outlets,errMsg,waitMsg };
};

export default outletReducer;