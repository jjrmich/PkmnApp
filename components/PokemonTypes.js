import React from 'react';
import { View, Text } from 'react-native';

class PokemonTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null,
        }
        // this._fetchTypes(props.pokemonId);
    }

    componentDidMount() {
        this._fetchTypes(this.props.pokemonId);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.pokemonId !== this.props.pokemonId) {
            this.setState({ loading: true });
            this._fetchTypes(newProps.pokemonId);
        }
    }

    _fetchTypes(pokemonId) {
        console.log('Reached this method successfully.');
        return fetch(`https://pokeapi.co/api/v2/pokemon/6/`)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('Got the response back');
            this.setState({
                loading: false,
                data: responseJson.types,
            });        
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        if (this.state.loading) {
            return (<Text>Loading...</Text>)
        }

        return (
            <View>
                <Text>Loaded!</Text>
            </View>
        );
    }
 }

// render() {
//     return (
//         <PokemonTypes pokemonId={this.state.selectedPokemon.id}/>
//     );
// }

export default PokemonTypes;