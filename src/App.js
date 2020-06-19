import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './components/main-page/main';
import { Information } from './components/information-page/information';
import { NavBar } from './components/navbar/navbar';
import { Alert } from './components/alerts/alert';
import { AlertState } from './components/context/AlertState';
import { FirebaseState } from './components/context/firebase/firebaseState';


function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <NavBar />
          <div className="container pt-5">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={MainPage} />
              <Route path={'/information'} component={Information} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
