import { View, Text } from 'react-native'
import React from 'react'
import GlobalView from '../component/global/GlobalView'
import StyledText from '../component/Text/StyledText'

const Profile = () => {
  return (
    <GlobalView>
      <StyledText big bold left>
        Perfil
      </StyledText>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 20,
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati fuga
        perspiciatis animi soluta, consequuntur neque sequi pariatur distinctio voluptates modi
        ipsum placeat cum in quidem nam magni a deleniti.
      </Text>
    </GlobalView>
  )
}

export default Profile