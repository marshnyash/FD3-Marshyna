import React from 'react';
import PropTypes from 'prop-types';

class MobileCard extends React.PureComponent {

  static propTypes = {
    client: PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired
    }),
    cbSavedCard: PropTypes.func.isRequired
  };

  state = {
    client: this.props.client
  }

  handleChange = (event) => {
    let newClient = {...this.state.client};
    let key = event.target.name;
    console.log('key: ',key);
    let val = event.target.value;
    console.log('val: ',val);
    newClient[key] = val;
    console.log('newClient[key]: ', newClient[key]);

    this.setState({
      client: newClient
    })
  }
 
  saveCard = (event) => {
    event.preventDefault();
    let {fam, im, otch, balance} = this.state.client;
    if(fam && im && otch && !isNaN(+balance)) {
      console.log('save cb');
      this.props.cbSavedCard(this.state.client);
    }

  }
  
  render() {
    let client = this.props.client,
        fam = client.fam,
        im = client.im,
        otch = client.otch,
        balance = client.balance  

    let FIO={fam:this.props.client.fam, im:this.props.client.im, otch:this.props.client.otch};
    console.log('FIO: ',FIO);

    
    
    return (
      <div className='MobileClient'>
        <div>
          <span>fam {`${fam}`}</span>
          <input name="fam" className='MobileClientFIO' defaultValue={`${fam}`} onChange={this.handleChange}></input>
        </div>
        <div>
          <span>im </span>
          <input name="im" className='MobileClientFIO' defaultValue={`${im}`} onChange={this.handleChange}></input>
        </div>
        <div>
          <span>otch </span>
          <input name="otch" className='MobileClientFIO' defaultValue={`${otch}`} onChange={this.handleChange}></input>
        </div>
        <div>
          <span>Balance </span>
          <input name="balance" className='MobileClientBalance' defaultValue={balance} onChange={this.handleChange} ></input>
        </div>
        <button onClick={this.saveCard}>Save</button>
      </div>
    );

  }

}

export default MobileCard;
