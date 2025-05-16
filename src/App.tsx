import React, { useEffect, useState } from 'react';
import {
  Box,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Header from './components/Header';
import EpisodeList from './components/EpisodeList';
import CharacterGrid from './components/CharacterGrid';
import {
  fetchCharacters,
  fetchEpisodes,
  fetchCharactersByUrls,
} from './api/rickAndMorty';
import { Episode, Character } from './types';

const drawerWidth = 300;

const App: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <EpisodeList
      episodes={episodes}
      selectedId={selectedEpisode?.id ?? null}
      onSelect={(ep) => {
        setSelectedEpisode(ep);
        if (isMobile) setMobileOpen(false);
      }}
    />
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Header onMenuClick={handleDrawerToggle} />

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Sidebar */}
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          sx={{
            width: drawerWidth,
            height: 'calc(100vh - 64px)',
            position: 'fixed',
            top: '64px',
            borderRight: '1px solid #ddd',
            backgroundColor: '#fff',
          }}
        >
          {drawerContent}
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        
          mt: '64px',
          height: 'calc(100vh - 64px)',
          overflowY: 'auto',
        }}
      >
        <CharacterGrid characters={characters} />
      </Box>
    </Box>
  );
};

export default App;
