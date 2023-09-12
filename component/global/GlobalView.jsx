import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const GlobalView = ({children}) => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#ffffff',
    }}>
        {children}
    </SafeAreaView>
  )
}

export default GlobalView