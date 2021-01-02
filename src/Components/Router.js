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
            <Route path="/profile" component={My} />
            <Route path="/club" component={My} />
            <Route path="/member" component={My} />
            <Route path="/applicant" component={My} />
            <Route path="/interview" component={My} />
            <Route path="/form" component={My} />
            <Redirect path="*" to="/" />
        </Switch>
        <Footer />
    </Router>
);

export default AppRouter;
