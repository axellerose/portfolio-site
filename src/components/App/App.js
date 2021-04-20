import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../global/theme';
import Box from '../common/Box';
import NavBar from '../NavBar/NavBar';

import './App.css';
import Header from '../Header';
import TechAndSkills from '../TechAndSkills';
import ImageSpacer from '../ImageSpacer';
import Portfolio from '../Portfolio';
import Contacts from '../Contacts';
import Footer from '../Footer';

const App = props => (
  <ThemeProvider theme={theme}>
    <Box mx={[theme.space[5], theme.space[5], theme.space[25], theme.space[50]]}>
      <NavBar />
      <Header />
      <TechAndSkills />
      <ImageSpacer />
      <Portfolio />
      <Contacts />
      <Footer />
    </Box>
  </ThemeProvider >
)

export default App;
