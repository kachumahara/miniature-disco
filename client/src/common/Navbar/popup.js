import Popup from '../../components/popup/index';
import React, { Component } from 'react';
import logo from '../../components/images/logo7.png'

class PopButt extends Component {

  constructor(props){
  super(props);
  this.state = { showPopup: false };
  }

  togglePopup() {
   this.setState({
     showPopup: !this.state.showPopup
   });
 }

  render() {
    return (
     <div> 
       <img id='logo' onClick={this.togglePopup.bind(this)} src={logo}
     alt="mail poem"/>
       {this.state.showPopup ?
         <Popup
          text='Click "Close Button" to hide popup'
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
      </div>

    );
  }
}

export default PopButt;