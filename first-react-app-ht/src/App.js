import React from 'react';
import './App.css';


class App extends React.Component {
    constructor (){
      super();

      this.state={
        name: 'Stepan',
        age: 25,
        textShown: false,
        btnTextShown: 'Hide'
      }

      this.nameChange = this.nameChange.bind(this);
      this.showAndHideChange = this.showAndHideChange.bind(this);
    }

    nameChange(){
      this.setState({name:'Mykola', age: '30'})
      console.log('this.state.name')
    };

    showAndHideChange(){
      this.setState({textShown: !this.state.textShown});
      this.state.btnTextShown === "Hide" ? this.setState({btnTextShown: "Show" }) 
         :this.setState({btnTextShown: "Hide"})
    }

  render(){

     return (
         <div className="App">
            
              {this.state.textShown ? null : 
                 <p className="showText"> {this.state.name} {this.state.age}</p>
              }

              <button  onClick={this.nameChange}> Click to Change Name and Age</button>
              <button className ="showName" onClick={this.showAndHideChange}> {this.state.btnTextShown} </button>
        </div>
     )
    }   
}
export default App;

