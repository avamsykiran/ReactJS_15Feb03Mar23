import { Fragment } from 'react';
import Counter from './components/Counter';
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => (
  <Fragment>
    <Header appTitle="react spa 002" />
    <div className='container-fluid p-4'>
      <div className='col-sm-5 mx-auto'>
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
    <Footer footNote="&copy; All Rights Reserved 2023"/>
  </Fragment>
);

export default App;
