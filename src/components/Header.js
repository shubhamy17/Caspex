import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ onMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1e1e2f' }}>
      <Toolbar>
        {isMobile && (
          <IconButton color="inherit" edge="start" onClick={onMenuClick} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Caspex
          </Typography>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            Explore Rick and Morty characters by episode
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
