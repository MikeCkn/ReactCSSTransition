import React, { Component } from 'react';
import Input from './Input';
import List from './List';
import '../styles/App.css';

const generateId = () => Math.floor(Math.random() * 10000);

class App extends Component {

  state = {
    inputValue: '',
    teams: [{
      id: generateId(), 
      name: 'PSG'
    }, {
      id: generateId(),
      name: 'Real Madrid'
    }, {
      id: generateId(), 
      name: "Manchester United"
    }]
  }

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  addTeam = (e) => {
    e.preventDefault()
    this.setState({
      teams: [...this.state.teams, {id: generateId(), name: this.state.inputValue}],
      inputValue: ''
    })
  }

  deleteTeam = (teamId) => {
    const index = this.state.teams.findIndex(team => teamId === team.id)
    console.log(index)
    this.state.teams.splice(index, 1)
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <Input 
          inputValue={this.state.inputValue}
          inputChange={this.inputChange}
          addTeam={this.addTeam}
        />
        <List
          inputValue={this.state.inputValue}
          teams={this.state.teams}
          deleteTeam={this.deleteTeam}
        />
      </div>
    );
  }
}

export default App;
