import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const TextComponent = ({ lista }) => {
  return (
    <View style={styles.container}>
      {lista.map((item) => {
        return (
          <View key={item.id} style={styles.content}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Text>
              In stock: {item.datos.stock} | {item.datos.marca}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: 'lightblue',
  },
  content: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});
