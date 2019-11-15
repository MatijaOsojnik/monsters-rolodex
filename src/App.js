import React, { Component } from "react";
import "./App.css";
import { tsConstructorType } from "@babel/types";
import "./components/card-list/card-list.components";
import { CardList } from "./components/card-list/card-list.components";
import { SearchBox} from "./components/search-box/search-box.components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  };

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  changeHandler = e => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeHolder = "Search Monsters"
        changeHandler = {this.changeHandler}
      />
      <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
export default App;
