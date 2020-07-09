import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Starred from "./Starred";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function App() {
  const classes = useStyles();
  const [repos,setRepos]=React.useState({items:[{}]});
  const [page,setPage]=React.useState(1);
  const getRepos=()=>{
    axios.get("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=1")
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
    <div style={{textAlign:"center"}}>
      {repos.items.map(rep=>{
          return <Starred key={rep.id} repoName={rep.full_name} description={rep.description} stars={rep.stargazers_count} issues={rep.open_issues}  />
      })}
    </div>
  );
}
