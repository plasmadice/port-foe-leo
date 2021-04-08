import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

import projects from "../src/projects";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-around",
  },
  projectContainer: {
    paddingBottom: "80px",
  },
  cardContainer: {
    margin: 0,
    // flexDirection: "column",
    display: "flex",
  },
  card: {
    margin: "10px",
    height: "300px",
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    [theme.breakpoints.up("xs")]: {
      // padding: "10px 45px 0 0",
    },
    [theme.breakpoints.only("lg")]: {
      padding: "10px 10px 0 0",
    },
    [theme.breakpoints.only("xl")]: {
      padding: "10px 80px 0 0",
    },
  },
  cardContent: {
    width: "100%",
    color: theme.palette.primary.contrastText,
  },
  cardActions: {
    // display: "flex",
  },
  media: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  cardTypography: {},
  title: {
    fontWeight: 800,
  },
  stack: {
    fontSize: "0.9rem",
    marginBottom: "70px",
  },
  description: {
    marginBottom: "10px",
    // width: '60px'
  },
  spark: {
    fontSize: "0.7rem",
    color: theme.palette.primary.contrastText,
  },
  text: {
    textAlign: "center",
    marginBottom: "20px",
  },
}));

const Project = ({ item }) => {
  const { title, img, color, stack, description, spark, links } = item;
  const classes = useStyles();

  return (
    <Grid
      item
      container
      justify="center"
      xs={12}
      md={6}
      lg={4}
      spacing={1}
      className={classes.cardContainer}
    >
      <div className={classes.cardContainer}>
        <Card
          raised
          className={classes.card}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${img}')`,
          }}
        >
          <CardContent
            className={classes.cardContent}
            style={{
              textShadow: `1px 1px 2px black, 0 0 1rem ${color}, 0 0 0.2rem ${color}`,
            }}
          >
            <div className={classes.cardTypography}>
              <Typography className={classes.title}>{title}</Typography>
              <Typography gutterBottom className={classes.stack}>
                {stack}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.description}
              >
                {description}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                className={classes.spark}
              >
                {spark}
              </Typography>
            </div>
          </CardContent>
          <CardActions className={classes.cardActions}>
            {links.liveSite != null ? (
              <Button
                size="small"
                href={links.liveSite}
                target="_blank"
                variant="contained"
                style={{ color: color }}
                startIcon={<LinkIcon />}
              >
                Live Site
              </Button>
            ) : null}
            {links.githubFrontend != null ? (
              <Button
                size="small"
                href={links.githubFrontend}
                target="_blank"
                variant="contained"
                style={{ color: color }}
                startIcon={<GitHubIcon />}
              >
                Frontend
              </Button>
            ) : null}
            {links.githubBackend != null ? (
              <Button
                size="small"
                href={links.githubBackend}
                target="_blank"
                variant="contained"
                style={{ color: color }}
                startIcon={<GitHubIcon />}
              >
                Backend
              </Button>
            ) : null}
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
};

const Projects = () => {
  const classes = useStyles();
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const list = projects.map((item) => {
      return <Project key={item.id} item={item} />;
    });

    setProjectList(list);
  }, [projects]);

  return (
    <Container maxWidth={false} className={classes.projectContainer}>
      <div className={classes.text}>
        <Typography variant="h3">My Recent Work</Typography>
        <Typography variant="subtitle1">
          Here are a few recent design projects.
        </Typography>
      </div>
      <Grid container className={classes.root}>
        {projectList}
      </Grid>
    </Container>
  );
};

export default Projects;
