import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

import {Route} from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = "/" component = {MovieList} />
      <Route path = "/movies/:id" component = {movie} />
    </div>
  );
};

export default App;
