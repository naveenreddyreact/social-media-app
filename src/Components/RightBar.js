import React from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

const RightBar = () => {
  return (
    <Box flex={2} p={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography varient="h6">Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default RightBar;
