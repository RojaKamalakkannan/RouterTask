import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          XYZ Organization
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          India
        </Typography>
        <Typography variant="body2">
          Learning is the 
          <br />
          
        </Typography>
        <Typography variant="body2">
          "KEY TO SUCCESS"
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">CONTACT US</Button>
      </CardActions>
    </Card>


    
  );
}
export default BasicCard;