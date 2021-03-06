import React from 'react';
import Card from './Card.js';
import './StarWars.css';

class CardList extends React.Component {
    render() {
        return (
            this.props.starwars.map(char => {
                return <Card 
                 name={char.name} 
                 year={char.birth_year}
                 gender={char.gender}
                 hair={char.hair_color}
                 eyes={char.eye_color}
                 skin={char.skin_color}
                 clickHandler={this.props.clickHandler}
                 key={this.props.name} />
            })
        )
    }  
}

export default CardList;