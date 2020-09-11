import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ClasesPage from "./ClasesPage";
import ClasesPageFunction from "./ClasesPageFunction";
import Header from "./common/header";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import EditClasePage from "./EditClasePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar={true}></ToastContainer>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/clase/:slug" component={EditClasePage}></Route>
        <Route path="/clase" component={EditClasePage}></Route>
        <Route path="/clases" component={ClasesPageFunction}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Redirect from="/about-page" to="/about"></Redirect>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}
