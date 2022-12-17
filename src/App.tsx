import React from 'react';
import './App.css';
import Header from "./1ui/components/header/Header";
import Footer from "./1ui/components/footer/Footer";
import RoutesApp from "./Routes";


function App() {
    return (
        <div className="App">
            <Header/>
            <RoutesApp/>
            <Footer/>
        </div>
    );
}

export default App;
