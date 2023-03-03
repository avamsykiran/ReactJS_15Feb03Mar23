import { useParams } from 'react-router';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createLoadStockActionThunk } from '../state/stockActionThunks';

import ItemDetails from './ItemDetails';
import ItemForm from './ItemForm';

const StockPage = () => {

    const dispath = useDispatch();

    let {outletId} = useParams();

    useEffect(() => dispath(createLoadStockActionThunk(outletId)), [outletId]);

    let stock = useSelector(globalState => globalState.inventory.stock);
    let info = useSelector(globalState => globalState.inventory.waitMsg);
    let err = useSelector(globalState => globalState.inventory.errMsg);

    return (
        <section className='container-fluid p-4'>
            <h3>Stock Status Of outlet#{outletId} </h3>

            {info && <p className='alert alert-info p-2 fw-bold'>{info}</p>}

            {err && <p className='alert alert-danger p-2 fw-bold'>{err}</p>}

            <table className='table table-border table-striped'>
                <thead>
                    <tr>
                        <th>Item#</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <ItemForm outletId={outletId} />
                    {stock && stock.length > 0 && stock.map(item => (
                        item.editable ?
                            <ItemForm key={item.id} item={item} /> :
                            <ItemDetails key={item.id} item={item} />
                    ))}
                    {(!stock || stock.length == 0) && (
                        <tr>
                            <td colSpan="5" className="text-center fw-bold">
                                No stock in the inventory
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}

export default StockPage;