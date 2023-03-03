import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import OutletsPage from './components/OutletsPage';
import StockPage from './components/StockPage';

const App = () => (
  <BrowserRouter>
    <Header appTitle="Inventory App" />

    <Routes>
      <Route path='/' exact element={<OutletsPage />} />
      <Route path='/stock/:outletId' element={<StockPage />} />
    </Routes>

    <Footer footNote="&copy; All Rights Reserved 2023" />
  </BrowserRouter>
);

export default App;
