import './App.css';
import { Loginscreen } from './components/Loginscreen';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { SignupScreen } from './components/SignupScreen';
import { StoreName } from './components/StoreName';
import { StoreName2 } from './components/StoreName2';
import { Industry } from './components/Industry';
import Market from './components/Market';
import { Loading } from './components/Loading';
function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route exact path='/' element={ <Loginscreen />}></Route> 
          <Route exact path='/signup' element={ <SignupScreen />}></Route> 
          <Route exact path='/name-store' element={ <StoreName />}></Route> 
          <Route exact path='/name-store2' element={ <StoreName2 />}></Route> 
          <Route exact path='/industry' element={ <Industry />}></Route> 
          <Route exact path='/market' element={ <Market />}></Route> 
          <Route exact path='/loading' element={ <Loading />}></Route> 
        </Routes>
       </Router>
       
    </div>
  );
}

export default App;
