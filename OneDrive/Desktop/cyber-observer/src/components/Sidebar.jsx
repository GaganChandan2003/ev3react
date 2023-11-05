import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import css from "../styles/Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import CloudIcon from "@mui/icons-material/Cloud";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const Sidebar = () => {
  return (
    <nav
      style={{
        width: "230px",
        background: "#282A2D",
        height: "100vh",
        color: "white",
      }}
    >
      <Box
        style={{
          width: "100%",
          padding: "10px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          alignItems: "center",
          fontSize: "26px",
          fontWeight: "550",
          border:'1px solid #282A2D'
        }}
      >
        <Image
          src={
            "http://3.121.233.50/observer/cyber/portal/assets/img/xmlogoalone.svg"
          }
          style={{ width: "60px", height: "60px" }}
        />
        <Text>XM Cyber</Text>
      </Box>
      <Box
        style={{
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        <Box className={css.tags}>
          <HomeIcon />
          <NavLink to="/">HOME</NavLink>
        </Box>
        <Box className={css.tags}>
          <ConstructionIcon />
          <Link to="/ospm">OSPM</Link>
        </Box>
        <Box className={css.tags}>
          <CloudIcon />
          <Link to="/sspm">SSPM</Link>
        </Box>
        <Box className={css.tags}>
          <CloudIcon />
          <Link to="/cspm">CSPM</Link>
        </Box>
        <Box className={css.tags}>
          <AccountTreeIcon />
          <Link to="/frameworks">FRAMEWORKS</Link>
        </Box>
        <Box className={css.tags}>
          <AssignmentIcon />
          <Link to="/reports">REPORTS</Link>
        </Box>
        <Box className={css.tags}>
          <SettingsSuggestIcon />
          <Link to="/system">SYSTEM</Link>
        </Box>
      </Box>
    </nav>
  );
};

export default Sidebar;
