import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function App() {
  const classes = useStyles();
  const [repos,setRepos]=React.useState();
  const [page,setPage]=React.useState(1);
  const getRepos=()=>{
    axios.get("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page="+page)
    .then(res=>{
      setRepos(res.data);
      setPage(page+1);
      console.log(res.data.items[0])
    }).catch(ex=>{
      console.log(ex);
    })
  }
  React.useEffect(()=>{
    getRepos();
  },[])
  return (
    <div>

    </div>
  );
}
