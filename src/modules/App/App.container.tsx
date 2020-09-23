import React from 'react';
import { useLocation } from 'react-router-dom';
import loadable from '@loadable/component';
import Animations from '../../assests/Animations.styles';
import Fonts from '../../assests/Fonts.styles';
import Navigation from '../Navigation';
import GlobalStyles from '../../assests/Global.styles';

const LazyRoutes = loadable(() => import('../Routing/Section.routes'));

const AppContainer = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyles currentSection={parseInt(location.pathname.split('/')[2], 10)} />
      <Fonts />
      <Animations />
      <Navigation />
      <LazyRoutes />
    </>
  );
};

export default AppContainer;
