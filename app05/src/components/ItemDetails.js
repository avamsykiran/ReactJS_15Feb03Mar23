
const ItemDetails = ({ item, remove, markEditable }) => (
    <tr>
        <td className='text-end'>{item.id}</td>
        <td>{item.name}</td>
        <td className='text-end'>{item.qty}</td>
        <td>{item.unit}</td>
        <td>
            <button type="button"
                onClick={event => markEditable(item.id)}
                className="btn btn-sm btn-secondary me-1">
                EDIT
            </button>
            <button type="button"
                onClick={event => remove(item.id)}
                className="btn btn-sm btn-danger me-1">
                DELETE
            </button>
        </td>
    </tr>
);

export default ItemDetails;