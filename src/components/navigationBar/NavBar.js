import React from "react";
import { Link, useLocation } from "react-router-dom";
import { pathIndex } from "../../utils/constants/navbarIndex";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";

export const NavBar = () => {
  const location = useLocation();
  const styles={ bgcolor: "#0476c1" }
  let index = pathIndex[location.pathname];

  return (
    <AppBar sx={styles}>
      <Toolbar>
        <Tabs value={index} textColor="inherit" indicatorColor="secondary">
          <Tab label="Home" component={Link} to="/" value="0" />
          <Tab label="Explore" component={Link} to="/explore" value="1" />
          <Tab label="Quiz" component={Link} to="/quiz" value="2" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};
