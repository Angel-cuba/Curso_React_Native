import { Pressable } from 'react-native'
import React from 'react'
import StyledText from './Text/StyledText'

const Button = ({
  label,
  onPress,
}) => {
  return (
    <Pressable
      style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
          marginHorizontal: 30,
      }}
      onPress={onPress}
    >
      <StyledText style={{
        color: '#fff',
        textAlign: 'center',
      }} bold big>{label}</StyledText>
    </Pressable>
  )
}

export default Button