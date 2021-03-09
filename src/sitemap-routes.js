import React from 'react';
import { Route } from 'react-router';
 
export default (
 <Route>
         <Route exact path="/" />
         <Route path="/not-found" />
         <Route path="/state/:id" />
         <Route path="/:url/:district" />
         <Route path="/states" />
         <Route path="/ip" />
    </Route>
);