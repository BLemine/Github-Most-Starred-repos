import React from "react";
import axios from "axios";
import Starred from "./Starred";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';


export default function App() {
  const [repos, setRepos] = React.useState({ items: [{}] });
  // this one below to be used to load more data/more pages
  const [page, setPage] = React.useState(1);
  const [loading,setLoading]=React.useState(true);
  const getRepos = () => {
    setLoading(true);
    axios.get("https://api.github.com/search/repositories?q=created:%3E2020-06-09&sort=stars&order=desc&page="+page)
      .then(res => {
        setRepos(res.data);
        setPage(page + 1);
        console.log(res.data.items)
        setLoading(false);
      }).catch(ex => {
        console.log(ex);
      })
  }
  React.useEffect(() => {
    getRepos();
  }, [])
  if(loading){
    return <div style={{textAlign:"center",marginTop:"20%"}}><CircularProgress /> </div>
  }
  return (
    <div style={{ textAlign: "center" }}>
      {repos.items.map(rep => {
        //console.log(rep.owner?rep.owner.avatar_url:"hjh")
        return <Starred key={rep.id} repoName={rep.full_name} avatar={rep.owner?rep.owner.avatar_url:""} description={rep.description} stars={rep.stargazers_count} issues={rep.open_issues} />
      })}
      <Button color="primary" style={{width:"100%"}} onClick={getRepos}>Next Page</Button>
    </div>
  );
}
