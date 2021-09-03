import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SearchList} from './searchList';

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <SearchList />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(210,180,140)',
  },
});
