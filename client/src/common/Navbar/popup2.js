import Popup from "../../components/popup/index";
import React, { Component } from "react";
import logo from "../../components/images/logo7.png";
import Popup2 from '../../components/AddPop/index'

class PopButt2 extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div>
        <button
          id="Add Task"
          onClick={this.togglePopup.bind(this)}
          src={logo}
          alt="Add "
        >
          Add Task
        </button>
        {this.state.showPopup ? (
          <Popup2
            text='Click "Close Button" to hide popup'
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default PopButt2;
