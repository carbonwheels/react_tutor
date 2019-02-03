import React from "react"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Avatar from '@material-ui/core/Avatar'

const JasonList = ({ data }) => (
  <div>
    {data.map(rec => {
      return (
        <Card style={{margin: "15px"}} key={rec.id}>
          <CardContent style={{textAlign: "left"}}>
            <Avatar aria-label="Recipe" >
              { rec.title.charAt(0).toUpperCase() }
            </Avatar><Typography variant="h5" color="primary">{rec.title}</Typography>
            <Typography paragraph >{rec.body}</Typography>
          </CardContent>
        </Card>
      );
    })}
  </div>
);

export default JasonList;
