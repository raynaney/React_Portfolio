import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// import Layout from './components/Layout/Layout';
import Home from "./pages/home";
// import Profile from './pages/Profile';
// import Event from './pages/Events';
// import Contact from './pages/Contact';
// import SignUp from './pages/SignUp';
// import EventPage from './pages/EventPage';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/contact" component={Contact} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/events" exact component={Event} />
          <Route path="/eventPage" exact component={EventPage} />
          <Route path="/profile" exact component={Profile} />
          <Route component={NotFound} /> */}
      </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
