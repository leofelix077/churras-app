import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header'
import ChurrasList from './components/ChurrasList'

class App extends Component {
  render(){
  return (
      <View style={styles.container}>
        <Header/>
        <ChurrasList/>
      </View>
     )
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:'center'
  }
});