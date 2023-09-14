import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalView from '../component/global/GlobalView'
import StyledText from '../component/Text/StyledText'
import { Context } from '../navigator/Navigator'

const Profile = () => {
  const { setUser } = React.useContext(Context);

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
      <TouchableOpacity style={{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 30,
      }} onPress={() =>setUser('')}>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>Cerrar sesión</Text>
      </TouchableOpacity>
    </GlobalView>
  )
}

export default Profile