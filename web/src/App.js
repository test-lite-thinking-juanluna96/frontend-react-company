import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import PageNotFound from "./components/page-not-found";
import { persist, store } from "./redux/store";
import { Companies, Login, Register } from "./routes";
import PrivateRoute from './routes/PrivateRoute';

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
      <PersistGate persistor={persist}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/companies" component={Companies} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
