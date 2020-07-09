import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import StarIcon from "@material-ui/icons/Star";
import BugReportIcon from '@material-ui/icons/BugReport';
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Starred() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.repoName}
          secondary={
            <span>
              <span
                style={{
                  width: 20,
                  height: 20,
                  display: "inline-block",
                  marginRight: 10
                }}
              >
                <StarIcon />
              </span>
              <span
                style={{ position: "absolute", marginTop: 5 }}
              >
                : {props.stars}
              </span>
              <span
                style={{
                  width: 20,
                  height: 20,
                  display: "inline-block",
                  marginLeft: 40,
                  marginRight: 10
                }}
              >
                <BugReportIcon />
              </span>
              <span
                style={{ position: "absolute", marginTop: 5 }}
              >
                : {props.issues}
              </span>
            </span>
          }
        />
      </ListItem>
    </List>
  );
}
