
import { useState } from 'react'
import ItemDetails from './ItemDetails';
import ItemForm from './ItemForm';

const StockPage = () => {
    let [stock, setStock] = useState([
        { id: 1, name: 'Rice', qty: 10, unit: '25 Kg Bag' },
        { id: 2, name: 'Wheat', qty: 5, unit: '20 Kg Bag' },
        { id: 3, name: 'Chana Dal', qty: 30, unit: '500 g packet' },
        { id: 4, name: 'Urdh Dal', qty: 20, unit: '1 kg packet' },
        { id: 5, name: 'Sugar', qty: 50, unit: '500 g packet' },
        { id: 6, name: 'Horlicks', qty: 40, unit: '500 g packet' }
    ]);

    const add = item => setStock([...stock, item]);

    const remove = id => setStock(stock.filter(item => item.id != id));

    const update = modifiedItem => setStock(
        stock.map(
            item => item.id != modifiedItem.id ? item : { ...modifiedItem, editable: undefined }
        )
    );

    const markEditable = id => setStock(
        stock.map(
            item => item.id != id ? item : { ...item, editable: true }
        )
    );

    const cancelEditable = id => setStock(
        stock.map(
            item => item.id != id ? item : { ...item, editable: undefined }
        )
    );

    return (
        <section className='container-fluid p-4'>
            <h3>Stock Status</h3>

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
                    <ItemForm save={add} />
                    {stock && stock.length > 0 && stock.map(item => (
                        item.editable ?
                            <ItemForm key={item.id}
                                item={item}
                                save={update}
                                cancelEditable={cancelEditable}
                            /> :
                            <ItemDetails key={item.id}
                                item={item}
                                remove={remove}
                                markEditable={markEditable}
                            />
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