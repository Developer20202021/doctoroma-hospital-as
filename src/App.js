import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
import LogInSingUp from './Components/LogInSingUp/LogInSingUp';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AuthContext from './Components/AuthContext/AuthContext';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthContext>
    {/* <div className="App"> */}

      <BrowserRouter>
      <Header></Header>

      <Switch>


        <Route exact path='/home'>
          <Home></Home>
        </Route>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <PrivateRoute path='/services/:id'>
          <Services></Services>
        </PrivateRoute>



    <Route exact path='/contact'>
      <Contact></Contact>

    </Route>

    <Route exact path='/login'>
      <LogInSingUp></LogInSingUp>
    </Route>


    <PrivateRoute path='/gallery'>
      <Gallery></Gallery>
    </PrivateRoute>
























      <Route path='*'>
      <NotFound></NotFound>
      </Route>
      </Switch>
      <Footer></Footer>

      </BrowserRouter>
     
    {/* </div> */}
    </AuthContext>
  );
}

export default App;
