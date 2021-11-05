import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import MealInfo from './View/JS/MenuInfo/MealInfo';
import Menu from './View/JS/Menu';


function App() {
  return (
    <Container>
      <Menu/>
      <MealInfo/>
    </Container>
  );
}

export default App;
