import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import PokemonTypes from './components/PokemonTypes.js';

// class TypesAPIScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       dataSource: ''
//     }
//   }

//   static navigationOptions = {
//     title: 'Types',
//   };

//   componentDidMount() {
//     return fetch('http://pokeapi.co/api/v2/pokemon/6/')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.types,
//         });
    
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={{flex: 1, paddingTop: 20}}>
//           <ActivityIndicator />
//         </View>
//       );
//     }

//     return (
//       <View style={styles.moviescontainer}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <View style={styles.movies}>
//                                     <Text style={styles.title}>
//                                       {item.type.name}
//                                     </Text>
//                                     <Text style={styles.year}>
//                                       placeholder
//                                     </Text>
//                                   </View>
//                       }
//           keyExtractor={item => item.slot}
//         />
//       </View>
//     );
//   }
// }

class TypesAPIScreen extends React.Component {

  static navigationOptions = {
    title: 'Types',
  };

  render() {
    return (
      <PokemonTypes pokemonId={8}/>
    );
  }
}

class RecentChatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Recent Chats',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    )
  }
}

class AllContactsScreen extends React.Component {
  static navigationOptions = {
    title: 'All Contacts',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>List of all contacts</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    )
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.navigation.state.params.mode === 'info' ? 'Contact info screen' : 'Chat with Lucy'}</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return(
      <View style={styles.container}>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat')}
          title='Chat with Lucy'
        />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
  Movies: { screen: TypesAPIScreen },
})

const JoshApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen }
});

export default JoshApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moviescontainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  movies: {
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 24,
  },
  year: {

  }
});
