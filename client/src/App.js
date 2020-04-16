import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

import { useAuth0 } from "./utils/auth0Provider";

import "./App.css";

// Common
import Navbar from "./common/Navbar";

// Views
import Home from "./views/Home";
import AddTask from "./views/AddTask/AddTask";
// import Project from "./views/Project";

<<<<<<< HEAD
import Popup from "./components/popup";
import logo from "./components/images/logo7.png";
import DragNDrop from "./components/DragNDrop";
=======
// import Popup from "./components/popup";
// import logo from "./components/images/logo7.png";
>>>>>>> 59ada6251feab077e7f1ff4045f72b1abb67d467

function App() {
  return (
    <Router history={history}>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tasks/add" component={AddTask} />
        {/* <Route path="/project" component={Project} /> */}
      </Switch>
      <DragNDrop />
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
