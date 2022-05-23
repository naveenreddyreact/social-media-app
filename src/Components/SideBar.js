import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import ListItems from "./ListItems";

const SideBar = () => {
  return (
    <Box flex={1} p={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItems
            component="a"
            reff="##Home"
            IconComponent={HomeIcon}
            IconText="Home"
          />
          <ListItems
            component="a"
            reff="##Groups"
            IconComponent={GroupIcon}
            IconText="Groups"
          />
          <ListItems
            component="a"
            reff="##Pages"
            IconComponent={ArticleIcon}
            IconText="Pages"
          />
          <ListItems
            component="a"
            reff="##MarketPlace"
            IconComponent={StorefrontIcon}
            IconText="MarketPlace"
          />
          <ListItems
            component="a"
            reff="##Friends"
            IconComponent={PersonAddIcon}
            IconText="Friends"
          />
          <ListItems
            component="a"
            reff="##Settings"
            IconComponent={SettingsApplicationsIcon}
            IconText="Settings"
          />
          <ListItems
            component="a"
            reff="##Profile"
            IconComponent={AccountBoxIcon}
            IconText="Profile"
          />
          <ListItem disablePadding>
            <ListItemButton component="a" href="##profile">
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
