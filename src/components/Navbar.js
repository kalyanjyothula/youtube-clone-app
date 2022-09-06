import React from "react";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/global-elements";
import SearchBar from "./SearchBar";

const Navbar = (props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

Navbar.propTypes = {};

export default Navbar;
