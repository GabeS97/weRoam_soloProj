import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import Navigation from "./components/Navigation";
import { useDispatch } from 'react-redux'
import * as sessionActions from "./store/session";
import Splash from "./components/Splash/Splash";
import Spots from "./components/Spots/Spots";
import AddSpots from "./components/Spots/AddSpots";
import EditSpots from "./components/Spots/EditSpots";
import SpotsDetails from "./components/Spots/SpotsDetails";

function App() {
  const dispatch = useDispatch();
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
        <Route exact path='/recommendation'>
          <Spots />
        </Route>
        {/* <Route path='/'> */}
          {/* <SpotsDetails /> */}
        {/* </Route> */}
      </Switch>
    </>
  );
}

export default App;
