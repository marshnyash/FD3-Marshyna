import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import MobileCard from './MobileCard'

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
    
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    changedListOfClients:this.props.clients,
    editedClient: null,
    clientId: null,
    addClient: null,
    newClient: null
  };


  deleteClient = (id) => {
    let changedClients = this.state.clients.filter( item => {
      return item.id != id;
    });
    this.setState({
      clients: [...changedClients],
      changedListOfClients: [...changedClients]
    })
  }

  editClient = (id) => {
    this.setState({
      clientId: id,
      editedClient: this.findClient(id),
    });
  }

  findClient = (id) => {
    return this.state.clients.find((item) => item.id == id);
  }

  saveCard = (newClient) => {
    if (this.state.editedClient) {
      let changedClients = [...this.state.clients];
      changedClients.forEach((item, i) => {
        item.id == newClient.id && (changedClients[i] = newClient);
      });
      
      this.setState({
        clients: changedClients,
        changedListOfClients: changedClients,
        editedClient: null
      });
      console.log('clients: ', this.state.clients);
    }
    if (this.state.newClient) {
      let changedClients = [...this.state.clients, newClient];
      this.setState({
        clients: [...changedClients],
        changedListOfClients: [...changedClients],
        newClient: null
      })
    }
  }

  addNewClient = () => {
    let newClient = {
      id: this.state.clients.length +1,
      fam:"",
      im:"",
      otch:"",
      balance:""
    };
    this.setState({
      newClient: newClient,
      editedClient: null
    })
  }

  getActive = () => {
    if (this.state.filter != "getActive") {
      let changedClients = this.state.clients.filter(c => {
        return c.balance > 0;
      });
      this.setState({
        changedListOfClients: changedClients,
        filter: "getActive"
      })
    }
  }

  getBlocked = () => {
    if (this.state.filter != "getBlocked") {
      let changedClients = this.state.clients.filter(c => {
        return c.balance <= 0;
      });
      this.setState({
        changedListOfClients: changedClients,
        filter: "getBlocked"
      })
    }
  }
  getAll = () => {
    if (this.state.filter != "getAll") {
      this.setState({
        changedListOfClients: [...this.state.clients],
        filter: "getAll"
      })
    }
  }
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.changedListOfClients.map( client => {
          let FIO={fam:client.fam, im:client.im, otch:client.otch};
          return <MobileClient cbEdited={this.editClient} cbDeleted={this.deleteClient} key={client.id} id={client.id} FIO={FIO} balance={client.balance}/>;
        }
    );
    
    return (
      <div className='MobileCompany'>
        <div className="btns">
          <input type="button" value="Активные" onClick={this.getActive}/>&nbsp;
          <input type="button" value="Блокированные" onClick={this.getBlocked}/>&nbsp;
          <input type="button" value="Все" onClick={this.getAll}/>
        </div>
        <br></br>
        <div className='MobileCompanyName'>Компания</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <br></br>
        <button onClick={this.addNewClient}>Добавить</button>
        <br></br>
        <br></br>

        { 
          this.state.editedClient &&
          <MobileCard client={this.state.editedClient} cbSavedCard={this.saveCard}/>
        }
        { 
          this.state.newClient &&
          <MobileCard client={this.state.newClient} cbSavedCard={this.saveCard}/>
        }
        
      </div>
      
    )
    ;

  }

}

export default MobileCompany;
