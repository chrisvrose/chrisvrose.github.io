import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';

export default function App() {
    return (
        <div className="App">
            <Header text="Hi"></Header>
            <HashRouter>
                <Route exact path="/" component={About} />
            </HashRouter>
            <Footer />
        </div>
    );
}
