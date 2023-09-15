import { Image, StyleSheet } from 'react-native';
import React from 'react';

const ImageViewer = ({ placeHolderImage, selectedImage }) => {
  const imageSource = selectedImage ? selectedImage : placeHolderImage;
  return (
    <Image
      source={{
        uri: imageSource,
      }}
      style={styles.image}
    />
  );
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
