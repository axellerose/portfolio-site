import React from 'react';
import { ThemeProvider } from 'styled-components';
import { space } from 'styled-system';
import theme from '../../theme';
import Box from '../Box/Box';
import NavBar from '../NavBar/NavBar';

import './App.css';


const App = props => (
  <ThemeProvider theme={theme}>
    <Box mx={[null, null, theme.space[5], theme.space[6]]}>
      <NavBar />
    </Box>
  </ThemeProvider >
)

export default App;
