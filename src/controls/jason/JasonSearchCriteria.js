import React from "react";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const JasonSearchCriteria = ({ displaySearch, clickSearch }) => {
  // const handleChange = name => event => {
  //   this.setState({
  //     //[name]: event.target.value
  //   });
  // };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <form noValidate autoComplete="off">
        <Drawer variant="temporary" anchor="top" open={displaySearch} onClose={clickSearch} >
          <div style={{ padding: "100px" }}>
            <Typography variant="h3" color="secondary">Criteria</Typography>
            
            <br />
            <TextField id="pkid" label="Identifier" margin="normal" variant="outlined" style={{ margin: "10px" }} />
            <TextField id="title" label="Title" margin="normal" variant="outlined" style={{ margin: "10px" }} />
            <TextField id="category" label="Category" margin="normal" variant="outlined" style={{ margin: "10px" }} />
            
            <br />
            <Button color="default" onClick={clickSearch}>Search</Button>
            <Button color="secondary" onClick={clickSearch}>Cancel</Button>
          </div>
        </Drawer>
      </form>
    </div>
  );
};

export default JasonSearchCriteria;
