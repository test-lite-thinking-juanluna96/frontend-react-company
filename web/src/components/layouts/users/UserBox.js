import { Box, Card, Grid, Typography } from "@mui/material";
import { createBrowserHistory } from "history";
import React from "react";
import { Link } from "react-router-dom";

function UserBox(props) {
  const { children, title } = props;
  const history = createBrowserHistory();

  const {
    location: { pathname },
  } = history;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          minHeight: "100vh",
        }}
      >
        <Grid item xs={3} justifyContent={"center"} container component="main">
          <Grid item xs={11} sm={8} md={5} elevation={1} square="true">
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem",
                borderRadius: "0",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                {title}
              </Typography>
              {children}
              <Grid container>
                <Grid item>
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: "1rem",
                        color: "#000000",
                      }}
                    >
                      {
                        pathname === "/register" ? (
                            <>
                                Already have an account?{" "}
                                <Link to="/login" style={{
                                    color: "#FFC300",
                                }}>Sign In</Link>
                            </>
                        ) : (
                            <>
                                Don't have an account?{" "}
                                <Link to="/register" style={{
                                    color: "#FFC300",
                                }}>Sign Up</Link>
                            </>
                        )
                      }
                    </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserBox;
