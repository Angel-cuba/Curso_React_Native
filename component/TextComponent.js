import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TextComponent = ({ image, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details')}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
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
    marginRight: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    width: 300,
    borderRadius: 10,
    height: 250,
    padding: 10,
  },
  content: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {},
  image: {
    width: 280,
    height: 150,
    borderRadius: 10,
  },
});
