import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Routes/Main";
import My from "../Routes/My";

const AppRouter = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/profile" component={My} />
            <Redirect path="*" to="/" />
        </Switch>
        <Footer />
    </Router>
);

export default AppRouter;
