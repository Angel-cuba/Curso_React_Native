import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Details = ({ route }) => {
  const { date, author, avatar, content } = route.params;
  return (
    <View style={styles.container}>
      <Image style={{ width: '100%', height: 220 }} source={{ uri: avatar }} />
      <View style={styles.user}>
        <Text style={styles.name}>{author}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#41414119',
    paddingHorizontal: 20,
    marginTop: 6,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  content: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#414141',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 2,
  },
  date: {
    fontSize: 18,
  },
});
