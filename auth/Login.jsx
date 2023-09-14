import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import GlobalView from '../component/global/GlobalView';
import { Context } from '../navigator/Navigator';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { setUser } = React.useContext(Context);

  const handleUsernameChange = (event) => {
    setUsername(event);
  };
  const handlePasswordChange = (event) => {
    setPassword(event);
  };

  const realName = 'Admin';
  const realPassword = 'password';

  const handleRequest = () => {
    if (username === realName && password.toLocaleLowerCase() === realPassword) {
      setUser(username);
    } else {
      Alert.alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <GlobalView>
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          placeholder="Username"
          onChangeText={handleUsernameChange}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={handlePasswordChange}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleRequest}
          style={{
            backgroundColor: 'blue',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: 'white',
            }}
          >
            Press Me
          </Text>
        </TouchableOpacity>
      </View>
    </GlobalView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
  },
});
