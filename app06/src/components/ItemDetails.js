import { useDispatch } from 'react-redux';
import { createDeleteItemAction, createMarkItemEditableAction } from '../state/stockActions';

const ItemDetails = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <tr>
            <td className='text-end'>{item.id}</td>
            <td>{item.name}</td>
            <td className='text-end'>{item.qty}</td>
            <td>{item.unit}</td>
            <td>
                <button type="button"
                    onClick={event => dispatch(createMarkItemEditableAction(item.id)) }
                    className="btn btn-sm btn-secondary me-1">
                    EDIT
                </button>
                <button type="button"
                    onClick={event => dispatch(createDeleteItemAction(item.id)) }
                    className="btn btn-sm btn-danger me-1">
                    DELETE
                </button>
            </td>
        </tr>
    )
};

export default ItemDetails;