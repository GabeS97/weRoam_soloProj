import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import Navigation from "./components/Navigation";
import { useDispatch } from 'react-redux'
import * as sessionActions from "./store/session";
import Splash from "./components/Splash/Splash";
import Spots from "./components/Spots/AllSpots/Spots";
import AllReviews from "./components/Review/AllReview/AllReviews";
import SpotsDetails from "./components/Spots/SpotsDetails";
import Footer from "./components/Footer/Footer";


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
        <Route exact path='/spots'>
          <Spots />
        </Route>
        <Route exact path='/spots/:id'>
          <SpotsDetails />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
