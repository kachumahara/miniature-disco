import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import { useAuth0 } from "./utils/auth0Provider";
import PrivateRoute from "../src/components/PrivateRoute";

import "./App.css";

// Common
import Navbar from "./common/Navbar";

// Views
import Home from "./views/Home";
import AddTask from "./views/AddTask/AddTask";
import Profile from "../src/views/Profile/Profile";
import ViewTasks from "../src/views/ViewTasks/ViewTasks";
// import Project from "./views/Project";

import Popup from "./components/popup";
import logo from "./components/images/logo7.png";
import Splash from "./views/SplashPage/index";
import DueDate from "./common/DueDate/index";

function App() {
  const { loading, isAuthenticated } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <Splash />;
  }

  return (
    <Router history={history}>
      <DueDate />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tasks/add" component={AddTask} />
        <Route path="/tasks/:id" component={ViewTasks}/>
        <Route path="/profile" component={Profile} />{" "}
        {/* <Route path="/project" component={Project} /> */}
        <PrivateRoute path="/profile" component={Profile}/>
        <PrivateRoute path="/tasks/add" component={AddTask} />
        <PrivateRoute path="/tasks/:id" component={ViewTasks}/>
      </Switch>
    </Router>
  );
}

// class App extends Component {
// constructor(props) {
//     super(props);
//     this.state = { showPopup: false };
// }

// togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup,
//     });
// }

// render() {
//     return (
//       <div id="main">
//         <img
//           id="open"
//           onClick={this.togglePopup.bind(this)}
//           src={logo}
//           alt="mail poem"
//         />
//         <h1>Click ^ to toggle chat box</h1>
//         {this.state.showPopup ? (
//           <Popup
//             text='Click "Close Button" to hide popup'
//             closePopup={this.togglePopup.bind(this)}
//           />
//         ) : null}
//       </div>
//     );
// }
// }

export default App;
