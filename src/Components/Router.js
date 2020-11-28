import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MJ_page from "../Routes/MJ_page";
import My from "../Routes/My";

const AppRouter = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={MJ_page} />
            <Route path="/my" component={My} />
            <Redirect path="*" to="/" />
        </Switch>
        <Footer />
    </Router>
);

export default AppRouter;
