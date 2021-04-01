import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Weather from "./components/pages/Weather";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Weather" component={Weather} />
                    <Route path="/About" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/Skills" component={Skills} />
                    {/* <Route path='/skills' component={ Skills}/> */}
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
