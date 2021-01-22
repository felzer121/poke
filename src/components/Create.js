import React, {useState}  from 'react'
import "./Create.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";


class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pokemon: [],
        species: [],
        count: 0
    };
  }
  pokemon() {
      for ( let i = 1; i < 101; i++ ) {
          fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
              .then( response => response.json() )
              .then( result => {
                  this.setState({ species: [...this.state.species, result.species], pokemon: [...this.state.pokemon, result] })
              });
      }
  }

  componentDidMount() {
      this.pokemon();
  }
  render() {
      const { pokemon, species, sprites } = this.state;
      return (
          <div className="pokemonList">
              { pokemon.map(item => (
                  <Link key={ item.name } to={{
                      pathname: `/${ item.name }`,
                      propsSearch: item.url
                  }} className="pokemonList__item">
                      <img src={ item.sprites.front_shiny } alt=""/>
                      { item.name }
                  </Link>
              ))}
          </div>
      );
  }

}
export default Create;
