import React from 'react';
import Grid from '@mui/material/Grid';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import { Character } from '../types';

// Component to display a grid of characters
interface CharacterGridProps {
  characters: Character[];
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ characters }) => {
  return (
    <Box sx={{ paddingX: { xs: 1, sm: 2 }, paddingTop: 2, paddingBottom: 4 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        Characters
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        {characters.map((char) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={char.id}>
            <Card sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="250"
                image={char.image}
                alt={char.name}
              />
              <CardContent>
                <Typography variant="h6">{char.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CharacterGrid;
