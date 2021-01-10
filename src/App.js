import logo from './logo.svg';

import Navbar from './components/navbar';
import { Component, React } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';
import Mission from './components/mission';
import Vision from './components/vision'; 
import Department from './components/department';
import NotFound from './components/notfound'; 
import Engg from './components/engg';
import Arts from './components/arts';
import Science from './components/science';
import Engg_Course from './components/engg_course';
import LoginForm from './components/common/loginform';
function App() {
  return (
    <div>
      <Navbar />            
      <main className="container-fluid">
        <switch>         
          <Route path="/home" component={Home}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/mission" component={Mission}></Route>
          <Route path="/vision" component={Vision} ></Route>
          <Route path="/department" component={Department} ></Route>          
          <Route path="/loginform" component={LoginForm}></Route>
          <Route path="/engg" component={Engg}></Route>
          <Route path="/engg/:name/:desc" component={Engg_Course}></Route>
          <Route path="/arts" component={Arts}></Route>
          <Route path="/science" component={Science}></Route>
         
          <Route path="/notfound" component={NotFound}></Route>
           
        </switch>
      </main>
    </div>
  );
}

export default App;
