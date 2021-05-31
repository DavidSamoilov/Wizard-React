import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import './App.css';
function App() {
  return (
    <Container className='text-center'>
      <Phase1 />

      <Phase2 />

      <Phase3 />
    </Container>
  );
}

export default App;
