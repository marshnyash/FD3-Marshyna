import React from 'react';
import ReactDOM from 'react-dom';
import './BR2JStyles.css';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component{
  
  static propTypes = {
    text: PropTypes.string.isRequired
  };
  
  render () {
   
    let text = this.props.text;
    //text = text.replace(/<br\s*\/?>/g,  '\r\n' ); // так только в консоле показывает верно ()
    text = text.split(/<br\s*\/?>/g); 
    console.log(text);

    text = text.map(item => {
        return <div>{item}</div>
    });
    
    console.log(text);
    return text
  }

}

export default BR2JSX;



