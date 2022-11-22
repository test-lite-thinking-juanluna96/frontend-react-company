import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/page-not-found";
import { store } from './redux/store';
import { Companies, Login, Register } from "./routes";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFC300",
      },
    },
  });

  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/companies" component={Companies} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
    </Provider>
  );
}
