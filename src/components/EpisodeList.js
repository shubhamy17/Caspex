import React from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';

const EpisodeList = ({ episodes, selectedId, onSelect }) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ padding: '16px' }}>
        <Typography variant="h6" fontWeight="bold">
          Episodes
        </Typography>
        <Divider sx={{ mt: 1 }} />
      </Box>

      <Box sx={{ overflowY: 'auto', flexGrow: 1 }}>
        <List disablePadding>
          {episodes.map((ep) => {
            const isSelected = ep.id === selectedId;
            return (
              <ListItemButton
                key={ep.id}
                onClick={() => onSelect(isSelected ? null : ep)}
                selected={isSelected}
                sx={{
                  marginX: 1,
                  marginY: 0.5,
                  borderRadius: 2,
                  backgroundColor: isSelected ? '#1976d2' : 'transparent',
                  color: isSelected ? '#fff' : 'inherit',
                  '&:hover': {
                    backgroundColor: isSelected ? '#1565c0' : '#f0f0f0',
                  },
                }}
              >
                <ListItemText
                  primary={ep.name}
                  secondary={ep.episode}
                  primaryTypographyProps={{
                    fontWeight: isSelected ? 'bold' : 500,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default EpisodeList;
