import React from "react"
import axios from "axios"
import Typography from "@material-ui/core/Typography"

import JasonList from "../controls/JasonList"

class Jason extends React.Component {
  state = {
    jasonData: []
  };

  //// NOTES: Using Axois to fetch promise data from API
  ////        then setState (slice is used to get the first 10)
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(res => {
      console.log(res);
      this.setState({
        jasonData: res.data.slice(0, 100)
      });
    });
  }

  render() {
    return (
      <div>
        <Typography variant="h2" color="secondary">
          Jason
        </Typography>
        <JasonList data={this.state.jasonData} />
      </div>
    );
  }
}

export default Jason;
