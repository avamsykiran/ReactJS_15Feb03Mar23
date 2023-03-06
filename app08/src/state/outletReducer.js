
import { WAIT, ERR, REFRESH, LOAD_BY_ID } from './outletActions';

const initState = () => ({
    outlets: undefined,
    errMsg: undefined,
    waitMsg: undefined,
    current: undefined
});

const outletReducer = (oldState = initState(), action) => {
    let { outlets,errMsg,waitMsg,current } = oldState;

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
            current = undefined;
            break;
        case LOAD_BY_ID:
            current = {...action.outlet};
            errMsg = undefined;
            waitMsg = undefined;
            break;
    }

    return { outlets,errMsg,waitMsg,current };
};

export default outletReducer;