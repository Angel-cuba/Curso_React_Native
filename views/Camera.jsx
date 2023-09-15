import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React from 'react';
import GlobalView from '../component/global/GlobalView';

import { Camera, CameraType } from 'expo-camera';
import StyledText from '../component/Text/StyledText';
import ImageViewer from '../component/ImageViewer';

const CameraPicker = () => {
  const [type, setType] = React.useState(CameraType.back);
  const [camera, setCamera] = React.useState(null); // [1
  const [hasPermission, setHasPermission] = React.useState(null);
  const [image, setImage] = React.useState(null);

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
  async function takePicture() {
    if (camera) {
      const photo = await camera.takePictureAsync();
      setImage(photo.uri);
    }
  }

  function toggleType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <GlobalView>
      <Camera
        style={{ flex: 1, width: '100%', alignSelf: 'center', borderRadius: 10 }}
        type={type}
        ref={(ref) => {
          setCamera(ref);
        }}
      />
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
      <ImageViewer selectedImage={image} placeHolderImage={'https://res.cloudinary.com/dqaerysgb/image/upload/v1648218398/istockphoto-1132926013-612x612_t1xwec.jpg'}/>
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
