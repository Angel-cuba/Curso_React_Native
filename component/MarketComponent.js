import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import StyledText from './Text/StyledText';

const MarketComponent = ({
  title,
  description,
  price,
  rating,
  discountPercentage,
  brand,
  thumbnail,
  images,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{
            width: 150,
            height: '100%',
            borderTopLeftRadius: 10,
          }}
          source={{ uri: thumbnail }}
          resizeMode="stretch"
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10, marginTop: 35 }}>
          {title}
        </Text>
      </View>
      <StyledText big bold>
        {brand}
      </StyledText>
      <View style={styles.content}>
        <StyledText bold style={{ color: '#2A2A2A' }}>
          {price} €
        </StyledText>
        <StyledText bold style={{ color: '#0A0C00' }}>
          {rating}⭐️
        </StyledText>
        <Text style={{ fontSize: 15, color: '#FF0000' }}>-{discountPercentage}%</Text>
      </View>
      <Text
        style={[
          styles.description,
          {
            fontSize: 18,
            fontWeight: 'bold',
          },
        ]}
      >
        {description.slice(0, 56)}...
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            style={{
              width: 40,
              height: 40,
              marginRight: 10,
              borderRadius: 2,
            }}
            source={{ uri: image }}
            resizeMode="stretch"
          />
        ))}
      </View>
    </View>
  );
};

export default MarketComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    width: 300,
    height: 280,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  image: {
    width: 150,
    height: 100,
    flexDirection: 'row',
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  description: {
    paddingTop: 10,
    marginHorizontal: 10,
  },
});
