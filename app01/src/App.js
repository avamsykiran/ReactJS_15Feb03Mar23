import { Fragment } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => (
  <Fragment>
    <Header appTitle="react spa 001" tagLine="..my first attempt to learn react.." />
    <Footer />
  </Fragment>
);

export default App;
