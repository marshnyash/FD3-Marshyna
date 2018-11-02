import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    FIO:PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
    }),
    balance: PropTypes.number.isRequired,
    cbDeleted: PropTypes.func.isRequired,
    cbEdited: PropTypes.func.isRequired,
  };
 
  state = {
    FIO: this.props.FIO,
    balance: this.props.balance,
    
  };

  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({
      FIO: newProps.FIO,
      balance: newProps.balance
    });
  };

  deleteClicked = () => {
    this.props.cbDeleted(this.props.id); 
  }

  editClicked = () => {
    this.props.cbEdited(this.props.id);
  }

 

  render() {
    console.log("MobileClient id="+this.props.id+" render");
    
    return (
      <div className='MobileClient'>
        <button onClick={this.editClicked}>Изменить</button>&nbsp;
        <button onClick={this.deleteClicked}>Удалить</button>&nbsp;
        <span className='MobileClientBalance'>{this.state.balance}</span>
        <span className='MobileClientFIO'>{this.state.FIO.fam+" "+this.state.FIO.im+" "+this.state.FIO.otch}</span>
         
        
      </div>
    );

  }

}

export default MobileClient;
