
import { ADD_ITEM, DEL_ITEM, UPD_ITEM, MARK_EDIT_ITEM, UNMARK_EDIT_ITEM } from './stockActions';

const initState = () => ({
    stock: [
        { id: 1, name: 'Rice', qty: 10, unit: '25 Kg Bag' },
        { id: 2, name: 'Wheat', qty: 5, unit: '20 Kg Bag' },
        { id: 3, name: 'Chana Dal', qty: 30, unit: '500 g packet' },
        { id: 4, name: 'Urdh Dal', qty: 20, unit: '1 kg packet' },
        { id: 5, name: 'Sugar', qty: 50, unit: '500 g packet' },
        { id: 6, name: 'Horlicks', qty: 40, unit: '500 g packet' }
    ]
});

const stockReducer = (oldState = initState(), action) => {
    let { stock } = oldState;

    switch (action.type) {
        case ADD_ITEM:
            stock = [...stock, action.item];
            break;
        case DEL_ITEM:
            stock = stock.filter(item => item.id != action.id);
            break;
        case UPD_ITEM:
            stock = stock.map(item => item.id != action.item.id ? item : { ...action.item, editable: undefined });
            break;
        case MARK_EDIT_ITEM:
            stock = stock.map(item => item.id != action.id ? item : { ...item, editable: true });
            break;
        case UNMARK_EDIT_ITEM:
            stock = stock.map(item => item.id != action.id ? item : { ...item, editable: undefined });
            break;
    }

    return { stock };
};

export default stockReducer;