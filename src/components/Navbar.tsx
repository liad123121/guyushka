import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import bb from "../assets/bb.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar sx={{ mb: "2rem" }} position="static">
      <Toolbar>
        <Typography
          sx={{
            flexGrow: 1,
            fontFamily: "Lobster",
            fontWeight: "400",
          }}
        >
          For Guyushka
        </Typography>
        {localStorage.getItem("login") && (
          <IconButton
            onClick={() => {
              localStorage.removeItem("login");
              navigate("/login");
            }}
            sx={{ p: 0 }}
          >
            <Avatar alt="Imjustababy" src={bb} />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
