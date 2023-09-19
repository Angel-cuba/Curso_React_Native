import { Text, TouchableOpacity, Alert, Image, View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import GlobalView from '../component/global/GlobalView';
import StyledText from '../component/Text/StyledText';
import { Context } from '../navigator/Navigator';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../component/ImageViewer';
import InputComponet from '../component/InputComponent';
import CustomButton from '../component/CustomButton';

const Profile = () => {
  const { setUser } = React.useContext(Context);
  const [image, setImage] = React.useState(null);
  const imageRef = React.useRef([]);
  const [formulario, setFormulario] = React.useState({
    nombre: '',
    apellidos: '',
    imagenes: imageRef.current,
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
      const { uri } = result.assets[0];
      imageRef.current.push(uri);
      setImage(uri);
    }
  };
  const changeText = (event) => {
    setFormulario({ ...formulario, nombre: event });
  };
  const changeTextApellidos = (event) => {
    setFormulario({ ...formulario, apellidos: event });
  };

  const deleteImgs = () => {
    imageRef.current = [];
    setImage(null);
  };

  return (
    <GlobalView>
      <ScrollView>
        <StyledText big bold left>
          Perfil
        </StyledText>
        <InputComponet label="Nombre" onChangeText={changeText} />
        <InputComponet label="Apellidos" onChangeText={changeTextApellidos} />
        <ImageViewer
          selectedImage={image}
          placeHolderImage={
            'https://res.cloudinary.com/dqaerysgb/image/upload/v1648218398/istockphoto-1132926013-612x612_t1xwec.jpg'
          }
        />
        {imageRef.current.length < 3 ? (
          <View>
            <CustomButton label="Seleccionar foto" onPress={pickImage} />
          </View>
        ) : (
          <View>
            <StyledText small bold style={{ color: 'red' }}>
              Limite de fotos alcanzado
            </StyledText>
            <CustomButton label="Delete" onPress={deleteImgs} color="#ff0000" />
          </View>
        )}
        <CustomButton label="Guardar" onPress={() => console.log('Formulario', formulario)} />
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
      </ScrollView>
      <View>
        <FlatList
          data={imageRef.current}
          renderItem={(item) => <CurrentItem item={item.item} />}
          keyExtractor={(index) => index.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={3}
        />
      </View>
    </GlobalView>
  );
};

export default Profile;

const CurrentItem = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <Image source={{ uri: item }} style={{ width: 100, height: 100, borderRadius: 5 }} />
    </View>
  );
};
