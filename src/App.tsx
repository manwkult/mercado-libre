import './App.css';

import { Fragment } from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';

import LayoutTemplate from './parts/Layout/LayoutTemplate';

function App() {
  return (
    <Fragment>
      <Switch>
        <LayoutTemplate>
          <Route path='/items/:id' component={Detail} />
          <Route exact path='/items' component={Home} />
        </LayoutTemplate>
      </Switch>
    </Fragment> 
  );
}

export default App;
