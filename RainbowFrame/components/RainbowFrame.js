import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    color: PropTypes.arrayOf(
      PropTypes.string.isRequired
    )
  };
  
  render() {

    let childrenBlock = this.props.children;
    console.log('childrenBlock', childrenBlock);
    
    let colorsBorder = this.props.color.map(item => 
      childrenBlock = (<div key={item} style={{border:"dashed 1px " + item, padding:"10px"}}>
         {childrenBlock}
       </div>)
    );
    console.log('colorsBorder', colorsBorder);
    
    return colorsBorder[colorsBorder.length-1];
    
  }

}

export default RainbowFrame;





