import { Container } from 'react-bootstrap';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import './App.css';
function App() {
  return (
    <Container className='text-center'>
      <Phase2 />
      <Phase3 />
    </Container>
  );
}

export default App;
