import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default function App() {
  return (
    <div className="App">
      <Header text="Hi"></Header>
      <Content />
      <Footer />
    </div>
  );
}
