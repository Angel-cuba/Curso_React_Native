import { View, Text } from 'react-native'
import React from 'react'

const StyledText = ({
  children,
  style,
  big,
  bold,
  small,
  left
}) => {
  return (
       <Text
      style={[
        {
          color: '#000000',
          fontSize: small ? 14 : big ? 24 : 16,
          fontWeight: bold ? 'bold' : 'normal',
          paddingBottom: 10,
          marginLeft: left ? 40 : 0,
        },
        style,
      ]}
    >
      {children}
    </Text>
  )
}

export default StyledText