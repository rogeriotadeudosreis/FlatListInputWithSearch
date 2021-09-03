import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';

// trecho de código da função consumindo uma api externa https
export const SearchList = () => {
  const [news, setNews] = useState([]);
  const [originalNews, setOriginalNews] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setOriginalNews(json); //criado aqui um array original para ser manipulado
        setNews(json);
      })
      .catch(error => console.error(error));
  }, []);

  // função pegando o item e renderizando
  function RenderPost(item) {
    return (
      <View style={styles.card}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.body} numberOfLines={4}>
          {item.body}
        </Text>
      </View>
    );
  }

  // função filtrando o que é digitado no input
  // criado na linha 43 um array de string e depois convertido novamente em um json
  // na linha 45 está fazendo o filtro tanto pelo título como pelo corpo
  function search(s) {
    let array = JSON.parse(JSON.stringify(originalNews));
    setNews(array.filter(d => d.title.includes(s) || d.body.includes(s)));
  }

  // retornando um flatlist com a lista da api
  return (
    <SafeAreaView>
      <Text style={styles.tituloFlatList}>Lista de Posts Diversos</Text>
      <TextInput
        style={styles.input}
        placeholder={'pesquise aqui...'}
        onChangeText={s => search(s)}
        autoCapitalize="none"
      />
      <FlatList
        data={news}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => RenderPost(item)}
      />
    </SafeAreaView>
  );
};

// estilizando os card com os posts
const styles = StyleSheet.create({
  tituloFlatList: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#808080',
    marginTop: 10,
  },
  input: {
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    marginHorizontal: 20,
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: '#FFF',
    fontSize: 15,
  },
  card: {
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#f5deb3',
  },
  title: {
    fontSize: 20,
    color: '#808080',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 15,
    color: '#777',
    fontWeight: 'normal',
    marginTop: 7,
  },
});
