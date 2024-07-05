import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <Home />
            <Footer />
        </>
    );
};

export default App;
