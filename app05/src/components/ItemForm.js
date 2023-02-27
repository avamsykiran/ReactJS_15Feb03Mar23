import { useState } from "react";

const ItemForm = ({ item, save, cancelEditable }) => {

    let [id, setId] = useState(item ? item.id : 0);
    let [name, setName] = useState(item ? item.name : '');
    let [qty, setQty] = useState(item ? item.qty : 0);
    let [unit, setUnit] = useState(item ? item.unit : '');
    let editable = item ? item.editable : undefined ;

    const saveBtnClick = event => {
        let item = { id, name, qty, unit };
        //all validation logic
        save(item);
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
                <input type="number" value={id} className="form-element"
                    onChange={e => setId(parseInt(e.target.value))} />
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
                        onClick={e => cancelEditable(id)}
                        className="btn btn-sm btn-danger me-1">CANCEL</button>
                )}
            </td>
        </tr>
    );
}

export default ItemForm;