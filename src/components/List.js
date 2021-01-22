import React from 'react'
import "./Create.css";
import {
    Link,
} from "react-router-dom";


class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    pokemonList() {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=850`)
            .then( response => response.json() )
            .then( result => {
                this.setState({ data: result.results })
            });
    }

    componentDidMount() {
        this.pokemonList();
    }

    render() {
        const { data, species, sprites } = this.state;
        console.log(data)
        return (
            <div className="pokemonList">
                { data.map(item => (
                    <Link key={item.name} to={{
                        pathname: `/${item.name}`,
                        propsSearch: item.url
                    }} className="pokemonList__item">
                        <p>{ item.name }</p>
                    </Link>
                ))}
            </div>
        );
    }
}
export default List;
