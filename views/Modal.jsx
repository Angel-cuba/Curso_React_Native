import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Modal = ({route}) => {
  const {image, title} = route.params
  return (
    <View style={styles.modal}>
      <Image style={{width: '100%', height: 300}} source={{uri: image}} resizeMode='cover'/>
      <Text style={styles.modalText}>{title}</Text>
    </View>
  )
}

export default Modal


const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
  }
})