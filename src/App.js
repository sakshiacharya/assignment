import './App.css';
import { Loginscreen } from './components/Loginscreen';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { SignupScreen } from './components/SignupScreen';
import { StoreName } from './components/StoreName';
function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route exact path='/' element={ <Loginscreen />}></Route> 
          <Route exact path='/signup' element={ <SignupScreen />}></Route> 
          <Route exact path='/name-store' element={ <StoreName />}></Route> 
        </Routes>
       </Router>
       
    </div>
  );
}

export default App;
