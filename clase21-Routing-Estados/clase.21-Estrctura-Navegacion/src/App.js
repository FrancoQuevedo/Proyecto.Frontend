import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from './componentes/Button/customButton';
import Footerr from './componentes/Footer/Footer';


import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacto from './componentes/Contacto/Contacto';
import Personajes from './componentes/Personajes/Personajes';
import Navbar from './componentes/Navbar/Navbar';
import Header from './componentes/Header/header';
import Ejemplo from './componentes/Ejemplo/Ejemplo';
function App() {
  return (
<BrowserRouter>
<Navbar/> 
 
<Switch>
        <Route exact path="/">
        <Header/>
        </Route>
        <Route exact path="/contacto1">     
          <Contacto/>


           </Route>
      <Route exact path="/Personajes">   

          <Personajes/>
          </Route>
        <Route exact path="/Ejemplo">
<Ejemplo/>
</Route>

      </Switch>
    <div className="App">

     <CustomButton/>
     <Footerr/>

    </div>
 
</BrowserRouter>

 );
}

export default App;
