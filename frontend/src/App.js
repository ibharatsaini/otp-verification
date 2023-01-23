import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Components/Router';
import Footer from './Components/Footer/Footer';

function App() {
  
  return (
         <BrowserRouter>
            <Router />
            <Footer />
         </BrowserRouter>
  );
}

export default App;
