import React, { Component } from "react";

import Table from "./Table";



class App extends Component {

    state = {
        characters: [
            {
                name: "Mario Fernandez",
                job: "Desarrollador"
              },
              {
                name: "Mac",
                job: "Bouncer"
              },
              {
                name: "Dee",
                job: "Aspring actress"
              },
              
              {
                name: "Dennis",
                job: "Bartender"
              },
              {
                name: "Pepo",
                job: "Jaibiologo"
              }
        ]
      };

      removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }
   
    
  
  render() {
    const { characters } = this.state
    

    return (
      <div className="App">
        <Table 
            characterData={characters} 
            removeCharacter={this.removeCharacter}    
        />
            
      </div>
    );
  }
}

export default App;
