import React from 'react';  
import './style.css';  
import Chat from '../chat';


class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<Chat />
<div className='popup\_inner'>  


{/* <button id='close' onClick={this.props.closePopup}>close me</button>  */}

</div>  
</div>  
);  
}  
}  

export default Popup;