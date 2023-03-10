import React, { useContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MyNav from "./components/MyNav";
import Sidebar from "./components/Sidebar";
import SkillDetails from "./components/SkillDetails";
import UseFetch from "./hooks/useFetch";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import ThemeContext from "./contexts/ThemeContext";
import { Container } from "react-bootstrap";
import WorkDetails from "./components/WorkDetails";
import MySpinner from "./components/MySpinner";

function App() {
  const [data, isPending, error] = UseFetch("/assets/data/data.json");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { darkMode, themeStyle } = useContext(ThemeContext);

  return (
    <Router>
      <Container
        fluid
        style={{
          minHeight: "100vh",
          ...themeStyle(darkMode),
        }}
      >
        {error && alert(error)}
        {isPending && <MySpinner dark={darkMode} />}
        {data && (
          <>
            <MyNav data={{ name: data.about.name, handleShow: handleShow }} />
            <Sidebar data={{ show: show, handleClose: handleClose }} />
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
                <WorkDetails data={data.works} />
              </Route>
              <Route exact path="/certifications/:id">
                <SkillDetails data={data.techs} />
              </Route>
            </Switch>
          </>
        )}
      </Container>
    </Router>
  );
}

export default App;
