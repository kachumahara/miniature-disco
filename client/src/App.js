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
// import Project from "./views/Project";

// import Popup from "./components/popup";
// import logo from "./components/images/logo7.png";

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tasks/add" component={AddTask} />
        <Route path="/profile" component={Profile}/>
        {/* <Route path="/project" component={Project} /> */}
        <PrivateRoute path="/tasks/add" component={AddTask} />
      </Switch>
    </Router>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showPopup: false };
//   }

//   togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup,
//     });
//   }

//   render() {
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
//   }
// }

export default App;
