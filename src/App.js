import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MyNav from "./components/MyNav";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";
import UseFetch from "./hooks/useFetch";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Container } from "react-bootstrap";

function App() {
  const [data, isPending, error] = UseFetch("/assets/data/data.json");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ThemeProvider>
      <Router>
        <div>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {data && (
            <>
              <MyNav data={{ name: data.about.name, handleShow: handleShow }} />
              <Sidebar data={{ show: show, handleClose: handleClose }} />
              <Container>
                <Switch>
                  <Route exact path="/">
                    <About data={data.about} />
                  </Route>
                  <Route exact path="/education">
                    <Education data={data.education} />
                  </Route>
                  <Route exact path="/skills">
                    <Skills data={[data.skills, data.profiles, data.techs]} />
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
              </Container>
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
