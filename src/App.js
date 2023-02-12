import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UseFetch from "./hooks/useFetch";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Works from "./pages/Works";

function App() {
  const [data, isPending, error] = UseFetch("./data/data.json");
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && (
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/works">
              <Works />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
