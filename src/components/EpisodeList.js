import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const EpisodeList = ({ episodes, selectedId, onSelect }) => {
  return (
    <List sx={{ width: 300, height: '100vh', overflow: 'auto', borderRight: '1px solid #ccc' }}>
      {episodes.map((ep) => (
        <ListItem
          key={ep.id}
          button
          selected={ep.id === selectedId}
          onClick={() => onSelect(ep.id === selectedId ? null : ep)}
        >
          <ListItemText primary={ep.name} secondary={ep.episode} />
        </ListItem>
      ))}
    </List>
  );
};

export default EpisodeList;
