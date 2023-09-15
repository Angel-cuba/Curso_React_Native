import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputComponent = ({
  label,
  onChangeText,
  style
}) => {
  return (
    <View style={{
      width: 100,
      margin: 10,
    }}>
      <Text style={{
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>{label}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
        }}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default InputComponent