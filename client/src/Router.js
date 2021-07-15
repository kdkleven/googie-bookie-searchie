import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "./components/Header"
import Saved from "./views/Saved"
import Search from "./views/Search"

function ReactRouter () {
    return (
        <Router>
            <>
            <Switch >
                <Route exact path="/">
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
            </Switch>
            {/* <Footer /> */}
            </>
        </Router>
    )
}

export default ReactRouter