import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Card.css'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';




interface IMCardProps {
    
    User: object | undefined;
    
}
 function MCard(props: IMCardProps) {

console.log(props)
  return (
    <Card className="MediaCardContainer">
      <CardActionArea>
        <CardMedia
          className="MediaCardImage"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            hello
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="MediaCardDescription">
            {props.User}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}
export default MCard;