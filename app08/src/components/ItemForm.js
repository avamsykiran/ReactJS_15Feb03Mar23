import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUnMarkITemItemEditableAction } from '../state/stockActions';
import { createAddItemActionThunk, createUpdateItemActionThunk } from '../state/stockActionThunks';

const ItemForm = ({ item, outletId }) => {

    const dispatch = useDispatch();

    let [id, setId] = useState(item ? item.id : 0);
    let [name, setName] = useState(item ? item.name : '');
    let [qty, setQty] = useState(item ? item.qty : 0);
    let [unit, setUnit] = useState(item ? item.unit : '');
    let _outletId = item ? item.outletId : outletId ;
    let editable = item ? item.editable : undefined;

    const saveBtnClick = event => {
        let item = { id, name, qty, unit, outletId:_outletId };
        //all validation logic
        dispatch(editable ? createUpdateItemActionThunk(item) : createAddItemActionThunk(item));
        if (!editable) {
            setId(0);
            setName('');
            setQty(0);
            setUnit('');
        }
    }

    return (
        <tr>
            <td>
                <input type="number" value={id} className="form-element" readOnly={true} />
            </td>
            <td>
                <input type="text" value={name} className="form-element"
                    onChange={e => setName(e.target.value)} />
            </td>
            <td>
                <input type="number" value={qty} className="form-element"
                    onChange={e => setQty(parseInt(e.target.value))} />
            </td>
            <td>
                <input type="text" value={unit} className="form-element"
                    onChange={e => setUnit(e.target.value)} />
            </td>
            <td>
                <button type="button"
                    onClick={saveBtnClick}
                    className="btn btn-sm btn-primary me-1">{editable ? "SAVE" : "ADD"}</button>
                {editable && (
                    <button type="button"
                        onClick={e => dispatch(createUnMarkITemItemEditableAction(id))}
                        className="btn btn-sm btn-danger me-1">CANCEL</button>
                )}
            </td>
        </tr>
    );
}

export default ItemForm;