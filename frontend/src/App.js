import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import Navigation from "./components/Navigation";
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from "./store/session";
import Splash from "./components/Splash/Splash";
import Footer from "./components/Footer/Footer";
import ViewSpots from "./components/Spots/ViewSpots";
import ViewOne from "./components/Spots/ViewOne";


function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);



  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
        <Route exact path='/spots'>
          <ViewSpots />
        </Route>
        <Route path='/spots/:spotId'>
          <ViewOne />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
