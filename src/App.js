import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import EpisodeList from './components/EpisodeList';
import CharacterGrid from './components/CharacterGrid';
import {
  fetchCharacters,
  fetchEpisodes,
  fetchCharactersByUrls,
} from './api/rickAndMorty';

const App = () => {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const [eps, chars] = await Promise.all([
        fetchEpisodes(),
        fetchCharacters(),
      ]);
      setEpisodes(eps);
      setCharacters(chars);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (selectedEpisode) {
      fetchCharactersByUrls(selectedEpisode.characters).then(setCharacters);
    } else {
      fetchCharacters().then(setCharacters);
    }
  }, [selectedEpisode]);

  return (
    <Box sx={{ display: 'flex' }}>
      <EpisodeList
        episodes={episodes}
        selectedId={selectedEpisode?.id}
        onSelect={(ep) => setSelectedEpisode(ep)}
      />
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <CharacterGrid characters={characters} />
      </Box>
    </Box>
  );
};

export default App;
