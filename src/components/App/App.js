import React from 'react';
import { ThemeProvider } from 'styled-components';
import { space } from 'styled-system';
import theme from '../../global/theme';
import Box from '../common/Box';
import NavBar from '../NavBar/NavBar';

import './App.css';



const App = props => (
  <ThemeProvider theme={theme}>
    <Box mx={[theme.space[5], theme.space[5], theme.space[25], theme.space[50]]}>
      <NavBar />
    </Box>
  </ThemeProvider >
)

export default App;
