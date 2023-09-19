import { View, TouchableOpacity, StyleSheet, Alert, FlatList, Image } from 'react-native';
import React from 'react';
import GlobalView from '../component/global/GlobalView';

import { Camera, CameraType } from 'expo-camera';
import StyledText from '../component/Text/StyledText';
import ImageViewer from '../component/ImageViewer';
import CustomButton from '../component/CustomButton';

import * as Location from 'expo-location';

const CameraPicker = () => {
  const [type, setType] = React.useState(CameraType.back);
  const [camera, setCamera] = React.useState(null); // [1
  const [hasPermission, setHasPermission] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const imageRef = React.useRef([]);

  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    Alert.alert('Permisos denegados');
    return <View />;
  }

const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permisos denegados');
    return;
  }
  let location = await Location.getCurrentPositionAsync({});
  setLocation(location);
}

  async function takePicture() {
    await getLocation();
    setImage(null);
    if (camera) {
      const photo = await camera.takePictureAsync();
      imageRef.current.push(photo.uri);
      setImage(photo.uri);
    }
  }

  function toggleType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const deleteImgs = () => {
    imageRef.current = [];
    setImage(null);
  };

  return (
    <GlobalView>
      {!image ? (
        <Camera
          style={{ width: '96%', height: 450, alignSelf: 'center', borderRadius: 10 }}
          type={type}
          ref={(ref) => {
            setCamera(ref);
          }}
        />
      ) : (
        <ImageViewer
          selectedImage={image}
          placeHolderImage={
            'https://res.cloudinary.com/dqaerysgb/image/upload/v1648218398/istockphoto-1132926013-612x612_t1xwec.jpg'
          }
        />
      )}
      {imageRef.current.length > 2 ? (
        <CustomButton label="Borrar imagenes" onPress={deleteImgs} color="#ff0000c2" />
      ) : (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={toggleType}>
            <StyledText big bold style={styles.text}>
              Flip
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <StyledText big bold style={styles.text}>
              Take picture
            </StyledText>
          </TouchableOpacity>
        </View>
      )}
      <ImageViewer
        selectedImage={image}
        placeHolderImage={
          'https://res.cloudinary.com/dqaerysgb/image/upload/v1648218398/istockphoto-1132926013-612x612_t1xwec.jpg'
        }
      />
      {
        !location ? <StyledText small>Waiting.....</StyledText> : <StyledText small bold>{
          `Latitud: ${location.coords.latitude} \n`
          + `Longitud: ${location.coords.longitude} \n`
          + `Altitud: ${location.coords.altitude} \n`
          
          }</StyledText>
      }
        <FlatList
          data={imageRef.current}
          renderItem={(item) => <CurrentItem item={item.item} />}
          keyExtractor={(item) => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
    </GlobalView>
  );
};

export default CameraPicker;

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    marginHorizontal: 30,
    paddingTop: 8,
    marginVertical: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

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
