import React, { useState } from "react";
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Notifications from "@mui/icons-material/Notifications";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <ConnectWithoutContactIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Typography varient="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Connected
        </Typography>
        <Search>
          <InputBase placeholder="Search.." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="primary">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ height: "30px", width: "30px" }}
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
            onClick={(event) => {
              setOpen(true);
            }}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ height: "30px", width: "30px" }}
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
            onClick={(event) => {
              setOpen(true);
            }}
          />
          <Typography variant="h6">Luke Matt</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={Open}
        onClose={(event) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
