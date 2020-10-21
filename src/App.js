import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";

import NavbarPage from "./NavBar";
import RegistrationForm from "./register";
import ParticipantsList from "./ParticipantsList";
import ParticipantData from "./ParticipantData";
import ParticipantsReport from "./ParticipantReport";

export default function App() {
  return (
    <>
      <Router>
        <NavbarPage />
        <div className="main-router">
          <Switch>
            <Route exact path={"/"} component={RegistrationForm} />
            <Route
              exact
              path={"/participantslist"}
              component={ParticipantsList}
            />
            <Route
              exact
              path={"/participantdata"}
              component={ParticipantData}
            />
            <Route
              exact
              path={"/participantsreport"}
              component={ParticipantsReport}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}
