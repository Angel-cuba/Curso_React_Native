import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const ServiceComponent = ({ image, title }) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default ServiceComponent;

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    // Propiedades de sombra específicas de Android
    elevation: 5, // Ajusta esto según tus necesidades
    // Propiedades de sombra específicas de iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
