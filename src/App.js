import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './buddyComponent/Home/Home';
import PostDetails from './buddyComponent/PostDeatils/PostDetails';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
