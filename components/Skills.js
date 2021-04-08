import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import skills from "../src/skills";

// import each icon individually and add to icons array
import Web from "@material-ui/icons/Web";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import Create from "@material-ui/icons/Create";
const icons = [Web, ViewQuilt, Create];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 20px",
    width: "70%",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    position: "relative",
    top: "-100px",
    border: "2px solid #e6ecf8",
    [theme.breakpoints.only("lg")]: {
      width: "80%",
    },
  },
  title: {
    marginBottom: "1rem",
    fontWeight: "800",
  },
  text: {
    marginBottom: "3rem",
  },
  section: {},
  list: {
    marginTop: 0,
    paddingLeft: 0,
    marginBottom: "2rem",
  },
  skillItem: {},
  listItem: {
    listStyle: "none",
  },
  dynamicIcon: {
    fontSize: "5rem",
    // textAlign: "center",
    margin: "0 auto",
  },
  divider: {
    display: "none",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  bigDivider: {
    display: "none",
    width: "100%",
    margin: "20px 0",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

const Skill = ({ item }) => {
  const { title, statement, languages, devTools } = item;
  const classes = useStyles();

  // chooses icon based on id
  const DynamicIcon = icons[item.id];

  const devToolsList = devTools.map((item) => (
    <li key={item} className={classes.listItem}>
      <Typography variant="body1" gutterBottom>
        {item}
      </Typography>
    </li>
  ));

  const languagesList = languages.map((item) => (
    <li key={item} className={classes.listItem}>
      <Typography variant="body1" gutterBottom>
        {item}
      </Typography>
    </li>
  ));

  return (
    <Grid
      item
      container
      direction="column"
      wrap="nowrap"
      align="center"
      item
      xs={12}
      md={6}
      className={classes.skillItem}
    >
      <DynamicIcon className={classes.dynamicIcon} color="primary" />

      <Typography variant="h6" gutterBottom className={classes.title}>
        {title}
      </Typography>

      <Typography variant="body1" gutterBottom className={classes.text}>
        {statement}
      </Typography>

      <Typography color="primary" variant="body1" gutterBottom>
        Languages I speak:
      </Typography>
      <ul variant="body1" className={classes.list}>
        {languagesList}
      </ul>

      <Typography color="primary" variant="body1" gutterBottom>
        Tools of the trade:
      </Typography>
      <ul variant="body1" className={classes.list}>
        {devToolsList}
      </ul>
      {item.id !== skills.length - 1 ? (
        <Divider className={classes.divider} />
      ) : null}
    </Grid>
  );
};

const Skills = () => {
  const [skillList, setSkillList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const list = skills.map((item) => {
      return <Skill key={item.id} item={item} />;
    });

    const dividedList = [
      list[0],
      list[1],
      <Divider key={4} className={classes.bigDivider} />,
      list[2],
    ];

    setSkillList(dividedList);
  }, [skills]);

  return (
    <Container fixed className={classes.root}>
      <Grid justify="center" container>
        {skillList}
      </Grid>
    </Container>
  );
};

export default Skills;
