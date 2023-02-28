import { useSelector} from 'react-redux';
import ItemDetails from './ItemDetails';
import ItemForm from './ItemForm';

const StockPage = () => {
    
    let stock=[];

    useSelector( globalState => stock = globalState.stock );

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
                    <ItemForm />
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