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

        
