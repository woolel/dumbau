import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import { PageType } from './types';
import { ORDER_PAGE_CONFIG } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={ORDER_PAGE_CONFIG[PageType.Onion].path} element={<OrderPage pageType={PageType.Onion} />} />
            <Route path={ORDER_PAGE_CONFIG[PageType.Jalapeno].path} element={<OrderPage pageType={PageType.Jalapeno} />} />
            <Route path={ORDER_PAGE_CONFIG[PageType.GreenChili].path} element={<OrderPage pageType={PageType.GreenChili} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;