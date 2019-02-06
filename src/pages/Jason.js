import React from "react";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";

import JasonList from "../controls/jason/JasonList";
import JasonSearchCriteria from "../controls/jason/JasonSearchCriteria";

class Jason extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jasonSearch: false, jasonData: [] };
  }
  //// NOTES: Using Axois to fetch promise data from API
  ////        then setState (slice is used to get the first 10)
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(res => {
      this.setState({ jasonData: res.data.slice(0, 100) });
    });
  }

  handleJasonSearchOpen = () => {
    this.setState({ jasonSearch: true });
  };

  handleJasonSearchClose = () => {
    this.setState({ jasonSearch: false });
  };

  handleSearch = () => {
    console.log("query data");
  };

  render() {
    return (
      <div>
        <Typography variant="h2" color="secondary">Jason
          <Fab color="secondary" size="small" aria-label="Add" variant="round" onClick={this.handleJasonSearchOpen}>
            <SearchIcon onClick={this.handleSearch} />
          </Fab>
        </Typography>
        <JasonSearchCriteria displaySearch={this.state.jasonSearch} clickSearch={this.handleJasonSearchClose} />
        <JasonList data={this.state.jasonData} />
      </div>
    );
  }
}

export default Jason;
