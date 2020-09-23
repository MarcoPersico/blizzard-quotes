import loadable from '@loadable/component';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Animations from '../../assests/Animations.styles';
import Fonts from '../../assests/Fonts.styles';
import Navigation from '../Navigation';
import SectionRouting from '../Routing/Section.routes';

const LazyGlobalStyles = loadable(() => import('../../assests/Global.styles'));

const AppContainer = () => {
  const location = useLocation();

  return (
    <>
      <LazyGlobalStyles currentSection={parseInt(location.pathname.split('/')[2], 10)} />
      <Fonts />
      <Animations />
      <Navigation />
      <SectionRouting />
    </>
  );
};

export default AppContainer;
