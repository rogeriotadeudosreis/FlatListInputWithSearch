import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';

export const SearchList = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setNews(json))
      .catch(error => console.error(error));
  }, []);

  function RenderPost(item) {
    return (
      <View style={styles.card}>
        <Text style={styles.title} numberOfLines={4}>
          {item.title}
        </Text>
        <Text style={styles.body} numberOfLines={4}>
          {item.body}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholderTextColor={'green'}
        placeholder={'   pesquise aqui...'}
      />
      <Text style={styles.tituloFlatList}>Lista de Posts Diversos</Text>
      <FlatList
        data={news}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => RenderPost(item)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tituloFlatList: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#808080',
  },
  card:{
    borderColor:'#eee',
    borderWidth:1,
    borderRadius:4,
    padding: 15,
    marginHorizontal:20,
    marginTop:20,
    backgroundColor:'#f5deb3',

  },
  title: {
    fontSize: 20,
    color: '#808080',
    fontWeight:"bold",
  },
  body: {
    fontSize: 15,
    color: '#777',
    fontWeight:'normal',
    marginTop:7,

  },
  input: {
    borderColor:'#eee',
    borderWidth:1,
    borderRadius: 4,
    height:40,
    margin:20,
    paddingLeft:10,
    backgroundColor: '#FFF',
  },
});
