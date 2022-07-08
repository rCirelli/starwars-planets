import React from 'react';
import Table from './components/Table';
import Wrapper from './components/Wrapper';
import PlanetProvider from './context/providers/PlanetsProvider';
// import Intro from './components/Intro';

function App() {
  return (
    <Wrapper>
      <PlanetProvider>
        <Table />
      </PlanetProvider>
      {/* <Intro /> */}
    </Wrapper>
  );
}

export default App;
