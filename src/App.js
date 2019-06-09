import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ButtonAppBar from './NavBar';
import About from './About';

function Index() {
  return <h2>Home</h2>;
}

// function About() {
//   return <h2>About</h2>;
// }

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <div>
      <Router>
        <ButtonAppBar />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav> */}
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </Router>
    </div>
  );
}

export default AppRouter;

