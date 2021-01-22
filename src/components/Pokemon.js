import React from 'react'
import {Link, Redirect} from 'react-router-dom';
import "./Pokemon.css";

    class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.url = window.location.pathname.substring(1);
        this.state = {
            data: [],
            sprites: [],
            abilities: [],
            stats: []
        };
    }
    componentDidMount(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${ this.url }`)
            .then( response => response.json() )
            .then( result => {
                this.setState({ data: result, sprites: result.sprites.other.dream_world, abilities: result.abilities, stats: result.stats })
            });
    }
    render() {
        const { abilities, data, sprites, stats } = this.state;
        console.log(this.state.data)
        console.log(sprites)
        return (
            <div className="pokemon">
                <img src={ sprites.front_default } alt=""/>
                <div className="pokemon__container">
                    <h2>{ data.name }</h2>
                    <div className="pokemon__info">
                        <div className="pokemon__ability">
                            <h4>Способности</h4>
                            { abilities.map(item => (
                                <p key={ item.id }>{ item.ability.name }</p>
                            ))}
                            <div>
                                <h4>Базовый опыт</h4>
                                { data.base_experience }
                            </div>
                        </div>
                        <div className="pokemon__stats">
                            <h4>Статы</h4>
                            { stats.map(item => (
                                <p key={ item.id }><span>{ item.base_stat + ' ' }</span>{ item.stat.name }</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pokemon;
