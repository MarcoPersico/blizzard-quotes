import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuoteSection from '../QuoteSection';

const SectionRouting = () => (
  <Switch>
    <Route path='/warcraft/:id'>
      <QuoteSection key={1} data={{ title: 'WARCRAFT QUOTES', background: '', type: 'warcraft' }} />
    </Route>
    <Route path='/overwatch/:id'>
      <QuoteSection key={2} data={{ title: 'OVERWATCH QUOTES', background: '', type: 'overwatch' }} />
    </Route>
    <Route path='/starcraft/:id'>
      <QuoteSection key={3} data={{ title: 'STARCRAFT QUOTES', background: '', type: 'starcraft' }} />
    </Route>
    <Route path='/diablo/:id'>
      <QuoteSection key={4} data={{ title: 'DIABLO QUOTES', background: '', type: 'diablo' }} />
    </Route>
    <Route path='/'>
      <QuoteSection key={5} data={{ title: 'ANYTHING', background: '', type: 'blizzard' }} />
    </Route>
  </Switch>
);

export default SectionRouting;
