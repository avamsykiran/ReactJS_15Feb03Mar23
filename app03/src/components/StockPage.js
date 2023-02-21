
import {Component} from 'react'

class StockPage extends Component{
    constructor(props){
        super(props);
        this.state={
            stock:[
                {id:1,name:'Rice',qty:10,unit:'25 Kg Bag'},
                {id:2,name:'Wheat',qty:5,unit:'20 Kg Bag'},
                {id:3,name:'Chana Dal',qty:30,unit:'500 g packet'},
                {id:4,name:'Urdh Dal',qty:20,unit:'1 kg packet'},
                {id:5,name:'Sugar',qty:50,unit:'500 g packet'},
                {id:6,name:'Horlicks',qty:40,unit:'500 g packet'}
            ]
        };
    }

    render(){
        let {stock} = this.state;

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
                        </tr>
                    </thead>
                    <tbody>
                        {stock.length>0 && stock.map(item => (
                            <tr>
                                <td className='text-end'>{item.id}</td>      
                                <td>{item.name}</td>
                                <td className='text-end'>{item.qty}</td>
                                <td>{item.unit}</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </section>
        );
    }
}

export default StockPage;