import { Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import GlobalView from '../component/global/GlobalView';
import StyledText from '../component/Text/StyledText';
import { Context } from '../navigator/Navigator';
import * as ImagePicker from 'expo-image-picker';
import Button from '../component/Button';
import ImageViewer from '../component/ImageViewer';
import InputComponet from '../component/InputComponent';

const Profile = () => {
  const { setUser } = React.useContext(Context);
  const [image, setImage] = React.useState(null);
  const [formulario, setFormulario] = React.useState({
    nombre: '',
    apellidos: '',
    imagen: '',
  });

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permisos denegados');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Solo imagenes
      allowsEditing: true, // Permite editar la imagen
      aspect: [4, 3], // Aspecto de la imagen
      quality: 1, // Calidad de la imagen
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setFormulario({ ...formulario, imagen: result.assets[0].uri });
    }
  };
  const changeText = (event) => {
    setFormulario({ ...formulario, nombre: event });
  };
  const changeTextApellidos = (event) => {
    setFormulario({ ...formulario, apellidos: event });
  };

  return (
    <GlobalView>
      <StyledText big bold left>
        Perfil
      </StyledText>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      >
        Form
      </Text>
      <InputComponet label="Nombre" onChangeText={changeText} />
      <InputComponet label="Apellidos" onChangeText={changeTextApellidos} />
      <ImageViewer
        selectedImage={image}
        placeHolderImage={
          'https://res.cloudinary.com/dqaerysgb/image/upload/v1648218398/istockphoto-1132926013-612x612_t1xwec.jpg'
        }
      />
      <Button label="Seleccionar foto" onPress={pickImage} />
      <Button label="Guardar" onPress={() => console.log('Formulario', formulario)} />
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
          marginHorizontal: 30,
        }}
        onPress={() => setUser('')}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </GlobalView>
  );
};

export default Profile;
