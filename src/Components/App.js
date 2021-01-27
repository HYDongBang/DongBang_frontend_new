import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <Router />
            <ToastContainer position="bottom-right" />
        </ThemeProvider>
    );
};
