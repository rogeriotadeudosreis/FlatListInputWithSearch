import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {posts} from '../src/data/posts/';

// const SearchList = () => {
//   const [data, setData] = useState([]);
// };

function Dados({data}) {
  return (
    <View>
      <Text>{data.titulo}</Text>
      <Text>{data.descricao}</Text>
    </View>
  );
}

export default function renderPost({item}) {
  return (
    <View style={styles.card}>
      <FlatList
        data={posts}
        keyExtractor={item => item.titulo}
        renderItem={({item}) => <Dados data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
  },
});
