import React, {Component} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

class App extends Component{
  state = {
    characters: [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: "Earth (C-137)",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: "Earth (C-137)",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: "Earth (Replacement Dimension)",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 4,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: "Earth (Replacement Dimension)",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 5,
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: "Earth (Replacement Dimension)",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 6,
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien",
        type: "",
        gender: "Female",
        origin: "Abadango",
        location: "Abadango",
        image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 7,
        name: "Abradolf Lincler",
        status: "unknown",
        species: "Human",
        type: "Genetic experiment",
        gender: "Male",
        origin: "Earth (Replacement Dimension)",
        location: "Testicle Monster Dimension",
        image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 8,
        name: "Adjudicator Rick",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: "unknown",
        location: "Citadel of Ricks",
        image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 9,
        name: "Agency Director",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: "Earth (Replacement Dimension)",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 10,
        name: "Alan Rails",
        status: "Dead",
        species: "Human",
        type: "Superhuman (Ghost trains summoner)",
        gender: "Male",
        origin: "unknown",
        location: "Worldender's lair",
        image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 11,
        name: "Albert Einstein",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: "Earth (C-137)",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 12,
        name: "Alexander",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: "Earth (C-137)",
        location: "Anatomy Park",
        image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 13,
        name: "Alien Googah",
        status: "unknown",
        species: "Alien",
        type: "",
        gender: "unknown",
        origin: "unknown",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 14,
        name: "Alien Morty",
        status: "unknown",
        species: "Alien",
        type: "",
        gender: "Male",
        origin: "unknown",
        location: "Citadel of Ricks",
        image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 15,
        name: "Alien Rick",
        status: "unknown",
        species: "Alien",
        type: "",
        gender: "Male",
        origin: "unknown",
        location: "Citadel of Ricks",
        image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 16,
        name: "Amish Cyborg",
        status: "Dead",
        species: "Alien",
        type: "Parasite, Cyborg",
        gender: "Male",
        origin: "unknown",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 17,
        name: "Annie",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: "Earth (C-137)",
        location: "Anatomy Park",
        image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 18,
        name: "Antenna Morty",
        status: "Alive",
        species: "Human",
        type: "Human with antennae",
        gender: "Male",
        origin: "unknown",
        location: "Citadel of Ricks",
        image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 19,
        name: "Antenna Rick",
        status: "unknown",
        species: "Human",
        type: "Human with antennae",
        gender: "Male",
        origin: "unknown",
        location: "unknown",
        image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
        fullScreen: false,
        appear: [true, true]
      },
      {
        id: 20,
        name: "Ants in my Eyes Johnson",
        status: "unknown",
        species: "Human",
        type: "Human with ants in his eyes",
        gender: "Male",
        origin: "unknown",
        location: "Interdimensional Cable",
        image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
        fullScreen: false,
        appear: [true, true]
      }
    ]
  };

  filterHandler = (status)=>{
    let characters = this.state.characters.slice();

    if(status === 0){
      characters.map(character => {
        character.appear[0] = true;
        return character;
      });
    } else if (status === 1){
      characters.map(character => {
        if(character.status === "Alive"){
          character.appear[0] = true;
        } else {
          character.appear[0] = false;
        }
        return character;
      });
    } else if (status === 2){
      characters.map(character => {
        if(character.status === "Dead"){
          character.appear[0] = true;
        } else {
          character.appear[0] = false;
        }
        return character;
      });
    }

    this.setState({characters});
  }

  searchBarHandler = () =>{
    let characters = this.state.characters.slice();
    const input = document.getElementById("searchBar").value;

    characters.map(character => {
      if(character.name.toUpperCase().includes(input.toUpperCase())){
        character.appear[1] = true;
      } else {
        character.appear[1] = false;
      }

      return character;
    });

    this.setState({characters});
  }

  clickCharacterHandler = (id) => {
    const characters = this.state.characters.slice();

    characters.map(character => {
      if(character.id === id){
        character.fullScreen = true;
      } else {
        character.fullScreen = false;
      }

      return character;
    });

    this.setState({characters});
  }

  clickBackHandler = (id) => {
    const characters = this.state.characters.slice();

    characters.map(character => {
      if(character.id === id){
        character.fullScreen = false;
      }
      
      return character;
    });

    this.setState({characters});
  }

  render() {
    return (
      <div className="App">
        <Header className="Header" clickFilter = {this.filterHandler} searchBarHandler = {this.searchBarHandler}/>
        <Body characters={this.state.characters} clickCharacter={this.clickCharacterHandler} clickBack={this.clickBackHandler}/>
      </div>
    )
  }
}

export default App;
