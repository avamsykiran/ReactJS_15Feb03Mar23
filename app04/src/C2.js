import { useState, useEffect } from "react";

const C2 = () => {

    let [msgs, setMsgs] = useState([]);

    useEffect(() => {
        setMsgs([...msgs, 'Component Did Mount Invoked'])
    }, []);

    const addMsg = event => setMsgs([...msgs, 'Btn Clicked @ ' + (new Date())]);

    useEffect(() => {
        if (msgs.length>0 && msgs.length % 5 == 0) {
            setMsgs([...msgs, '5 new msgs received']);
        }
    }, [msgs]);

    return (
        <section>
            <h3>Hooks Demo</h3>
            <button type="button" onClick={addMsg} >Add Message</button>
            <ol>
                {msgs.map(msg => <li>{msg}</li>)}
            </ol>
        </section>
    );
}

export default C2;