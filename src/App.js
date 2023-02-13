import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";
import UseFetch from "./hooks/useFetch";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  const [data, isPending, error] = UseFetch("/data/data.json");
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
              <About data={data.about} />
            </Route>
            <Route exact path="/education">
              <Education data={data.education} />
            </Route>
            <Route exact path="/skills">
              <Skills data={[data.skills, data.techs]} />
            </Route>
            <Route exact path="/works">
              <Works data={data.works} />
            </Route>
            <Route exact path="/contact">
              <Contact data={[data.about, data.social]} />
            </Route>
            <Route exact path="/works/:id">
              <Details data={data.works} />
            </Route>
            <Route exact path="/certifications/:id">
              <Details data={data.techs} />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
