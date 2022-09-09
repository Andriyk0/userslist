import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};
