import React from 'react';
import { Navigation } from '.';

const NavigationContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navigation.Component
      onMenuClicked={() => setIsMenuOpen(!isMenuOpen)}
      onItemSelected={() => setIsMenuOpen(false)}
      isMenuVisible={isMenuOpen}
    />
  );
};

export default NavigationContainer;
