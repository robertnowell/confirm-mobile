
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignUpPopUp1 from "./components/SignUpPopUp1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|sign-up-pop-up-1)">
          <SignUpPopUp1
            x2OutlinedcFocusedProps={signUpPopUp1Data.x2OutlinedcFocusedProps}
            x3ContainedATextProps={signUpPopUp1Data.x3ContainedATextProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const x2OutlinedcFocusedData = {
    inputText: "XXX-XXX",
    label2: "Enter C ode *",
};

const x3ContainedATextData = {
    children: "Submit",
};

const signUpPopUp1Data = {
    x2OutlinedcFocusedProps: x2OutlinedcFocusedData,
    x3ContainedATextProps: x3ContainedATextData,
};

