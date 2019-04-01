import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";

const Index = () => {
  return <h2>Index Page</h2>;
};

const About = () => {
  return <h2>About Page</h2>;
};

const AboutID = ({ match, location }) => {
  return (
    <>
      <p>
        {" "}
        Match Props:
        <code>{JSON.stringify(match)}</code>
      </p>
      <p>
        Location Props:
        <code>{JSON.stringify(location)}</code>
      </p>
      <h2>About with ID: {match.params.aboutId}</h2>
    </>
  );
};

const Info = ({ match, location }) => {
  return (
    <>
      <p>
        {" "}
        Match Props:
        <code>{JSON.stringify(match)}</code>
      </p>
      <p>
        Location Props:
        <code>{JSON.stringify(location)}</code>
      </p>
      <h2>Info with search text: {location.search}</h2>
    </>
  );
};

const NoMatch = () => {
  return <h2>404</h2>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Index</Link>
        <Link to="/about">About</Link>
        <Link to="/about/1">About with ID</Link>
        <Link to="/info/?search=learn-with-param&hash=1&react=true">
          Info page
        </Link>

        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" exact component={About} />
          <Route path="/about/:aboutId" component={AboutID} />
          <Route path="/info/" component={Info} />
          <Route component={NoMatch} />
        </Switch>

        <a href="/about">About page with reload</a>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
