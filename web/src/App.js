import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/page-not-found";
import { Login, Register } from "./routes";


export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFC300',
      },
    },
  });
  

    return (
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      </ThemeProvider>
    );
}
