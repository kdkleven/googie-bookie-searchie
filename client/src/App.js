import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "./components/Header"
import Saved from "./views/Saved"
import Search from "./views/Search"
// import NoMatch from "./views/NoMatch"
import "./App.css";
import "./index.css";

function App() {
    return (
        <Router>
            <div>
            <Switch >
                <Route exact path={["/", "/books"]}>
                    <Header />
                    <Search />
                </Route>
                <Route exact path="/search">
                    <Header />
                    <Search />
                </Route>
                <Route exact path="/saved">
                    <Header />
                    <Saved />
                </Route>
                {/* <Route>
                    <NoMatch />
                </Route> */}
            </Switch>
            {/* <Footer /> */}
            </div>
        </Router>
    )
}

export default App;