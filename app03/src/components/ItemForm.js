import { Component } from "react";

class ItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 0, name: '', qty: 0, unit: '' };
    }

    saveBtnClick = event => {
        let item = {...this.state};
        //all validation logic
        this.props.save(item);
        this.setState({ id: 0, name: '', qty: 0, unit: '' });
    }

    render() {
        let { id, name, qty, unit } = this.state;
        return (
            <tr>
                <td>
                    <input type="number" value={id} className="form-element"
                        onChange={e => this.setState({ id: parseInt(e.target.value) })} />
                </td>
                <td>
                    <input type="text" value={name} className="form-element"
                        onChange={e => this.setState({ name: e.target.value })} />
                </td>
                <td>
                    <input type="number" value={qty} className="form-element"
                        onChange={e => this.setState({ qty: parseInt(e.target.value) })} />
                </td>
                <td>
                    <input type="text" value={unit} className="form-element"
                        onChange={e => this.setState({ unit: e.target.value })} />
                </td>
                <td>
                    <button type="button" 
                        onClick={this.saveBtnClick}
                        className="btn btn-sm btn-primary me-1">ADD</button>
                </td>
            </tr>
        );
    }
}

export default ItemForm;