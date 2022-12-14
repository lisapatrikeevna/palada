import React from 'react';
import './App.css';
// import Home from "./1ui/pages/home/Home";
import Header from "./1ui/components/header/Header";
// import Map from "./1ui/components/map/Map";
import Footer from "./1ui/components/footer/Footer";
import RoutesApp from "./Routes";


function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Home/>*/}
            {/*<Map/>*/}
            <RoutesApp/>
            <Footer/>
        </div>
    );
}

export default App;
