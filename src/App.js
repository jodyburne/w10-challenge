import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Temp from './Temp'
import Custo from './Custo'
import Celebrities from './Celebrities'
import CelebDetail from './CelebDetail'

function App() {
  return (
    <div className="App">
    <nav>
        <Link to="/">Home</Link>
        <Link to="/temperature">Temperature</Link>
        <Link to="/customize-image">Customize Image</Link>
        <Link to="/celebrities">Celebrities</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" exact component={Temp}/>
        <Route path='/customize-image' exact component={Custo}/>
        <Route path="/celebrities" exact component={Celebrities}/>
        <Route path="/celeb-detail"  component={CelebDetail}/>
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </div>
  );
}

export default App; 

