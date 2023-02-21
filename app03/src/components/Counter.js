
import { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    stepUp = event => this.setState({ count: this.state.count + 1 });

    stepDown = event => this.setState({ count: this.state.count - 1 });

    render() {
        let { count } = this.state;
        return (
            <span className='m-2 p-2'>
                <button type="button" className='btn btn-sm btn-danger' onClick={this.stepDown}>-</button>
                <span className='fw-bold ms-1 me-1'>{count}</span>
                <button type="button" className='btn btn-sm btn-primary' onClick={this.stepUp}>+</button>
            </span>
        )
    }

}

export default Counter;