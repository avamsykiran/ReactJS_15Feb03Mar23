Pre-Requisites
    HTML 5
        Basic HTML typography
        Tables
        Lists
        Containers
        Graphics
        Form Elements and its validation attributes
        HTML 5 api

    CSS 3
        Selectors
        Box model properties

    Javascript 
        Javasctipt objects  String, Math, Object ..etc
        Function    function expressions, arrow functions, closures, callbacks
        Array       array proptotype functions like map,reduce,filter,forEach,fill ..etc.,
        DOM Manipulations (optional)
        OOP         Class, Object, JSON, inheretence, bind method ..etc.,
        ES6         Module, spreed operator, rest operator, tempalte literal
        Async Programming   async,await, Promsie, setInterval, clearInterval ..et.,

    Bootstrap 5 (optional)

React JS
-----------------------------------------------------------------------------------------------------------------------------

    is a javascript based SPA library.

    Singlke Page Application is a client-side executing web application that is held by a single html page. and that page is organised into individual segments or parts called components.

    Dynamic Web Application

        Web-Server                                              Browser/WebClient
         ServerSide Controller <-----------------REQ--------------
            +
            Views    ---render---> html+css -------------RESP------>    the html page is laoded after unloading any prev page.

    Single Page Application

        Web-Server                                              Browser/WebClient
            spa-bundle          <-------------------REQ----------
            (index.html +
                *.js + *.css)
                    |-----------------spa-bundle (RESP) ------------>   the index.html is laoded along with
                                                                    the assosiated js.

                                                                    any events / form submitions are handle by the
                                                                    javascript on the client. No need to 
                                                                    contact server at all.

        rest-api        <--------------data related operation REQ-  
                        --------------RESP xml/json----------------> received by the js on the client.
                                                                    and this JS can generate html content
                                                                    to display the received data and adds this
                                                                    new content to the index.html page.
    Lab Setup

        NodeJS          development platform        https://nodejs.org
        VS Code         ide                         https://code.visualstudio.com/download

    NodeJS ?
        is a javascript runtime.
        is used to execute javascript in standalone mode without a browser.

        opertions like packageing / testing etc., are done on the developer machine
        using a few javascript tools and for thsoe tools to execute we need NodeJS.

    Create a React App?

        npx create-react-app app01
        npx create-react-app app02
        npx create-react-app app03

        or

        npm install -g create-react-app

        create-react-app app01
        create-react-app app02
        create-react-app app03

    
    ReactJS offers html extendability. Using react js libraries we can
    create our own html elements and attributes.

    Elements created using reactjs are called COMPONENTS.

    ReactJS Components

        Class Components
        Function Components
        High Order Components

    Function Components

        is any javascript function that returns a single top-level html element.

        const Header = () => <h3>My First ReactJS APP</h3>

        <Header />

    JSX - JavaScript eXtended.

        it is combination script of html and javascript to generate
        html dom dynamically.

        let unm = "Vamsy Kiran";
        let emp = {empId:1,name:"Suseela",basic:45000};

        let para1 = <p> Welcoem {unm} </p>;
        let para2 = (
            <p>
                Employee {emp.empId} is called {emp.name} and is drawing
                rupees {emp.basic} as basic pay monthly. As per HR policies
                he will receive a hra of rupees {emp.basic*0.12} per month.
            </p>
        );

        let friends = ["Vamsy","Kiran","Vasu","Vinay"];

        let myFriendsList = friends.length===0 ? <p>No Friends </p> : (
            <ol>
                {
                    friends.map( f => <li> {f} </li> )
                }
            </ol>
        );

        JSX Rules
            
            1. JSX is case sensitive.
            2. all html elements and attributes must follow camel case.

                <h1></h1>   is valid
                <H3></H3>   is invalid
                <h3 text-align="center"> blah blah </h3>    is invalid
                <h3 textAlign="center"> blah blah </h3>    is valid
            
            3. Attribute 'class' is in-valid, instead we have to use 'className'.
            4. All react components must follow initial capitals.

                <navbar></navbar>       invalid
                <NavBar></NavBar>       valid

            5. no variable or function can hold ore return more than one
                top level element.

                    let x = <h1>Details</h1><p>Vamsy</p>                invalid
                    let x = <div> <h1>Details</h1><p>Vamsy</p> </div>   valid
    
    React 'props'

        props stands for properties.

        props is a parameter to components through which 
        a parent component can pass data to a child component.
        props collect the attributes on a component and will
        be sued inside the components.
        

    Bootstrap Integration

        is a styling library.

        npm i bootstrap --save

        node_modules
            |-bootstrap
                |-dist
                    |-css
                        |-bootstrap.min.css     //import this into index.js
                    |-js
                        |-bootstrap.min.js
                        |-bootstrap.bundle.js   //import this also into index.js

    Class Component

        is a javascript class inhereting from Component of React.

        React.Component offers
                1. state        is an immutable property to hold all data.
                                the state property is monitored for changes
                                and if any changes are made to state it triggers
                                'render()' method.

                2. render()     has to return the DOM of this component.

                3. setState({}) used to update 'state'.

                4. also offers component life cycle methods.

        class Dashboard extends Component {
            constructor(props){
                super(props);
                this.state = {
                    userName:'Vamsy Kiran',
                    pendingTasks:5,
                    assignedTasks:20
                };
            }

            render(){

                let {userName,pendingTasks,assignedTasks} = this.state;
                let completedTasks = assignedTasks - pendingTasks ;

                return (
                    <section>
                        <span>{userName}</span>
                        <span>{pendingTasks} / {assignedTasks} </span>
                        <span>{completedTasks} / {assignedTasks} </span>
                    </section>
                );
            }
        }

        <Dashboard />

    Working with React JS Forms

        Controlled Form Component 

            Each input element is bound to a state-property using 'value' attribute
            of the input element and the changes are tracked using
            onChange event of input element and the changing value is
            received through the setState method.

            this follows the single source of truth principal.

        UnControlled Form Component

            the input elements are not linked with any state or other variable of the component.

            Each input element can be accessed via 'refs' (references)

                <input type="text" value="0"  ref={tb1} />

            When ever we need to collect the data we will collect the data using
            the refs injector of the component.

                let x = this.refs.tb1.value;

            The form has its own source of data which is in no way being tracked
            by the component.

            'refs' are costly and are anti to single source of truth principal, and hence
            this pattern is never recommended.


    React class Component Life Cycle Methods

        constructor()
            |-> render()
                    |-> componentDidMount()

                            /**************************************************/
                                a action on liffe cycle happens
                                until setState is called.
                                setState may be called in any event or 
                                in the componentDidMount itself.
                            /**************************************************/

                        each time when setState is called ...
                            |-> render()
                                |-> componentDidUpdate()

                        at the time of unloading a component
                            componentWillUnmount()

                        at the time of detecitng any error or issue in the component..
                            componentDidCatch()

    React Hooks

        a react hook is a function that allows a functional component to
        access the reactJS features.

        1. hooks are to be called only in functional components.
        2. hooks are called in the top-level code section of the functional component

        useState            params:     initial value
                            returns:    an array of getter,setter

                            let [count,setCount] = useState(0);

        useEffect           params:     aCallBack,an array of dependencies

                            useEffect(() => {},[])

                                    the array of dependencies is empty thus,
                                    the call back is invoekd only once after the first rendering.

                                    equivalend to componentDidMount()

                            useEffect(() => {})

                                    the array of dependencies is not defined, thus
                                    the call back is invoekd after each time the render() is invoekd.

                                    equivalent to componentDidUpdate()

                            useEffect(() => {},[var1,var2])

                                    the array fo dependencies is having two dependencies var1 and var2.
                                    each time the render() is invoked, if var1 or var2 have been modified
                                    then the call back is executed.

                                    equivalent to componentDidUpdate() with conditions.

State Management using Redux
--------------------------------------------------------------------------------

    Redux offers Centralized State Management.

        this potentially avoids teh components to manage or share data and that increases
        the isolation of the components which inturn makes the app more maintainable and dynamic.

        npm install redux react-redux --save

        redux
            store           is a place where the entire state of the app is maintained.
                            one react app will have one and only store.
                            'createStore' method from 'redux' module used to create a store.

                            const myStore = createStore(myReducer);

            reducer         is a pure javascript function that has
                                oldState,action as paramaeters and
                                modifiedState is returned

                            const myReducer = (oldState,action) => {
                                /*operation on initialState as per the given action */

                                return modifedState;
                            };

            action          is a json object having payload and type as properties.
                            'type' indicates what operation has to be done on the state
                            'payload' hold the data needed to execute the operation.

                            { type:'DELETE',empId:101}
                            { type:'ADD', emp:{empId:110,name:'Vamsy',sal:45000}}
                            { type:'UPDATE',emp:{empId:110,name:'Vamsy Kiran',sal:85000}}

            dispatch        is a in-built function from 'redux' module used
                            by a component to send action to the reducer.

                            let addAction = { type:'ADD', emp:{empId:110,name:'Vamsy',sal:45000}};
                            dispatch(addAction);
                            
        react-redux
            Provider            is a component from react-reduc used to wrap the store
                                on our top-level component.

                                root.render(
                                    <React.StrictMode>
                                        <Provider store={myStore}> 
                                            <App />
                                        </Provider>
                                    </React.StrictMode>
                                );

            useSelector hook    is used to retrive data from store into a component.

                useSelector( globalState => { /*retrive what part of the state we need*/ });

            useDispatch hook    is used to inject dispatch method and invoke it to launch an action.

                const dispatch = useDispatch();

            store  →-----------------------------------------------------
            ↑                                          |               |
            |                                          | state         | state
            |                                          ↓               ↓ 
            |                                          | useSelector   | useSelector
            |                                          | extract       | extract
            |                                          | requried      | required 
            |                                          | data from     | data from
            |                                          | state         |
            |                                          ↓               ↓ 
            |                                      Component1      Component2
            |                                          |               |
            |                                          | useDispatch   | useDispatch
            | modified state                           | gives         | gives
            |                                          | dispatch      | dispatch
            |                                          |               |
            |←-----reducer ←-------- dispatch(action)-←|               |
                           ←-------- dispatch(action)-----------------←|  

json-server
----------------------------------------------------------------------------------------------
    is a tool used to generate fake rest-api jsut for learning purpose.

    depends on a .json file for data and creates rest-api to perorm CRUD operations on that data.

    md rest-api
    cd rest-api
    npm init -y
    npm install json-server --save

    rest-api/package.json
        |-scripts
            "start":"json-server --port 7777 --watch ./data.json"

    rest-api/data.json
        add hypothetical data.

    npm start

axios 
------------------------------------------------------------------------------

    mpm install axios --save
    
    axios offers method to send request to a rest-api

        axios.
                get("url")
                post("url",{json:Object})
                put("url",{json:Object})
                delete("url")

    each of these method return a Promsie. 
    a Promsie object has then(toReciveData) and a catch(receiveError)

redux-thunk 
------------------------------------------------------------------------------

    redux-thunk is a thunk library used to apply any asynchronous middleware operation
    in redux state management.

    thunk?      is a function that returns another function.

    in redux-thunk, action can be an object or action can be a function.

    
            store  →-----------------------------------------------------
            ↑                                          |               |
            |                                          | state         | state
            |                                          ↓               ↓ 
            |                                          | useSelector   | useSelector
            |                                          | extract       | extract
            |                                          | requried      | required 
            |                                          | data from     | data from
            |                                          | state         |
            |                                          ↓               ↓ 
            |                                      Component1      Component2
            |                                          |               |
            |                                          | useDispatch   | useDispatch
            | modified state                           | gives         | gives
            |                                          | dispatch      | dispatch
            |                                          |               |
            |                |←-- dispatch(actionObj)-←|               |
            |←-----reducer ←-|               dispatch(actionFunction)-←|
                             |                             |
                             |                             | via redux-thunk
                             |                             |
                             |                             |---------------------------------|
                             |←-- dispatch(waitActionObj)-←|  1. inform the comp to wait     |
                             |                             |  2. raise a axios req           |
                             |←-- dispatch(dataActionObj)-←|  3. recieve data                | 
                             |                             |         or                      |
                             |←-- dispatch(errActionObj)--←|    receive error                |
                                                           |---------------------------------|
 React Routing
    ------------------------------------------------------------------------

        npm install --save react-router react-router-dom

         react-router-dom v6

                    <Link to="targetPath"> Link Text </Link>

                    <BrowserRouter>
                        <Component1 />
                        <Component2 />  //will appear as common page layout

                        <Routes>
                            <Route path="/" element={<C3 />} />
                            <Route path="/home" element={<C4 />} />
                            <Route path="/about" element={<C5 />} />
                            <Route path="/contact" element={<C6 />} />
                        </Routes>
                    </BrowserRouter>
                    
                    <Redirect to="targetUrl" />               