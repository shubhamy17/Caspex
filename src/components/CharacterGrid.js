import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const CharacterGrid = ({ characters }) => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {characters.map((char) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={char.id}>
          <Card sx={{ borderRadius: 3 }}>
            <CardMedia component="img" height="250" image={char.image} alt={char.name} />
            <CardContent>
              <Typography variant="h6">{char.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterGrid;
