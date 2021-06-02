//dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Gallery from "./components/Gallery";
import SinglePage from "./components/SinglePage";
import About from "./components/About";
import Contacts from "./components/Contacts";
import PageNotFound from "./components/PageNotFound";

//utils
import ScrollToTop from "./utils/ScrollToTop.utils";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/gallery" component={Gallery} />
          <Route
            exact
            path="/gallery/:currentPage/:slug"
            component={SinglePage}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </ScrollToTop>
      <Contacts />
    </Router>
  );
}

export default App;
