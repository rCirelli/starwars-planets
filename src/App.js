import React from 'react';
import Table from './components/Table';
import Wrapper from './components/Wrapper';
import PlanetProvider from './context/providers/PlanetsProvider';

function App() {
  return (
    <Wrapper>
      <PlanetProvider>
        <Table />
      </PlanetProvider>
    </Wrapper>
  );
}

export default App;
