import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import WarcraftBg from '../../assests/images/warcraft-bg.webp';
import OverwatchBg from '../../assests/images/overwatch-bg.webp';
import DiabloBg from '../../assests/images/diablo-bg.webp';
import StarcraftBg from '../../assests/images/starcraft-bg.webp';
import BlizzardBg from '../../assests/images/blizzard-bg.webp';
import QuoteSection from '../QuoteSection';

const LazyQuoteSection = loadable(() => import('../QuoteSection'));

const SectionRouting = () => (
  <Switch>
    <Route path='/warcraft/:id'>
      <LazyQuoteSection key={1} data={{ title: 'WARCRAFT QUOTES', background: WarcraftBg }} />
    </Route>
    <Route path='/overwatch/:id'>
      <LazyQuoteSection key={2} data={{ title: 'OVERWATCH QUOTES', background: OverwatchBg }} />
    </Route>
    <Route path='/starcraft/:id'>
      <LazyQuoteSection key={3} data={{ title: 'STARCRAFT QUOTES', background: StarcraftBg }} />
    </Route>
    <Route path='/diablo/:id'>
      <LazyQuoteSection key={4} data={{ title: 'DIABLO QUOTES', background: DiabloBg }} />
    </Route>
    <Route path='/'>
      <QuoteSection key={5} data={{ title: 'ANYTHING', background: BlizzardBg }} />
    </Route>
  </Switch>
);

export default SectionRouting;
