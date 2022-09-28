import React from 'react';
import './App.css';


class App extends React.Component {
    constructor (){
      super();

      this.state={
        name: 'Stepan',
        age: 25
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
      this.setState({name:'Mykola', age: '30'})
      console.log('this.state.name')

    }

  render(){
     return (
         <div className="App">
              <button  onClick={this.handleChange}> Click to Change Name and Age</button>
              <h1> {this.state.name} {this.state.age}</h1>
        </div>
     )
    }   
}
export default App;
