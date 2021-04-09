import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import WorkIcon from "@material-ui/icons/Work";
import EmailIcon from "@material-ui/icons/Email";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <WorkIcon />, name: "Projects", page: "#work" },
  { icon: <EmailIcon />, name: "Contact", page: "#contact" },
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    page: "https://github.com/plasmadice",
  },
];

const CustomSpeedDial = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e, page) => {
    e.preventDefault();
    console.log(page);
    window.location = `${page}`;
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      className={classes.speedDial}
      hidden={false}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          FabProps={{ color: "secondary" }}
          tooltipTitle={action.name}
          onClick={(e) => {
            handleClick(e, action.page);
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default CustomSpeedDial;
