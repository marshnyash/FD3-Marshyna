import React from 'react';
import ReactDOM from 'react-dom';
import './BR2JStyles.css';

class BR2JSX extends React.Component{
  
  static propTypes = {
    //text: PropTypes.string.isRequired
  };
  
  render () {
   
    let text = this.props.text;
    text = text.replace(/<br\s*\/?>/g,  " " ); 

    return text
  }

}

export default BR2JSX;



