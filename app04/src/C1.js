import { Component } from "react";

class C1 extends Component {
    constructor() {
        super();
        this.state = {
            msgs: []
        }
    }

    componentDidMount(){
        this.setState({msgs:[...this.state.msgs,'Component Did Mount Invoked']});
    }

    addMsg = event => this.setState({msgs:[...this.state.msgs,'Btn Clicked @ '+(new Date())]});

    componentDidUpdate(){
        if(this.state.msgs.length%5==0){
            this.setState({msgs:[...this.state.msgs,'5 new msgs received']});
        }
    }

    render() {
        return (
            <section>
                <h3>Life Cycle Method Demo</h3>
                <button type="button" onClick={this.addMsg} >Add Message</button>
                <ol>
                    {this.state.msgs.map(msg => <li>{msg}</li>)}
                </ol>
            </section>
        );
    }
}

export default C1;