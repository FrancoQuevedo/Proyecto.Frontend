import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from './componentes/Button/customButton';
import Footerr from './componentes/Footer/Footer';
import Home from './componentes/Header/header';
import Navbar from './componentes/navbar/navbar'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacto from "./componentes/Contacto/Contacto";

function App() {
  return (

<BrowserRouter>
<Navbar/>

<Switch>
<Route exact path="/">
 <Home/>
</Route>

<Route exact path="/Contacto">

<Contacto/>
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
