import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const ListItems = (props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={props.component} href={props.reff}>
        <ListItemIcon>
          <props.IconComponent />
        </ListItemIcon>
        <ListItemText primary={props.IconText} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItems;
