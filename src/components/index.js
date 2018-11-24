import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './common/menu'            

/*
  Pages
*/


import LatestPage from './latest-films-page';
import PopularPage from './popular-films-page';
import UpcomingPage from './upcoming-films-page';
import SearchPage from './search-films-page';
import SimilarPage from './similar-films-page';
import GanresPage from './ganres-page';
import FilmPage from './film-page';
import NotFound from './common/notFound';

const Root = () => {
  return(
    <>
      <Menu />
      <div className="container">
      <Switch>
        <Route path="/" exact component={LatestPage}/>
        <Route path="/list/latest" exact component={LatestPage}/>
        <Route path="/list/popular" exact component={PopularPage}/>
        <Route path="/list/upcoming" exact component={UpcomingPage}/>
        <Route path="/list/search/:query" exact component={SearchPage}/>  
        <Route path="/list/similar/:id" exact component={SimilarPage}/> 
        <Route path="/list/ganres" exact component={GanresPage}/>
        <Route path="/film/:id" exact component={FilmPage}/>
        <Route component={NotFound}/>
      </Switch>
      </div>

    </>
  )
}

export default Root;
