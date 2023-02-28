import { Fragment } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import StockPage from './components/StockPage';

const App = () => (
  <Fragment>
    <Header appTitle="Inventory App" />
    <StockPage />
    <Footer footNote="&copy; All Rights Reserved 2023"/>
  </Fragment>
);

export default App;
