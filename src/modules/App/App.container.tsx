import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Animations from '../../assests/Animations.styles';
import Fonts from '../../assests/Fonts.styles';
import GlobalStyles from '../../assests/Global.styles';
import Navigation from '../Navigation';
import SectionRouting from '../Routing/Section.routes';

const AppContainer = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Fonts />
    <Animations />
    <Navigation />
    <SectionRouting />
  </BrowserRouter>
);

export default AppContainer;
