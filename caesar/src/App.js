import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import KeyPage from "./page/KeyPage";

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={KeyPage}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
