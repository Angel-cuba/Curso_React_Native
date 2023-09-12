import { SafeAreaView, StyleSheet, View } from 'react-native';
import Banner from './views/Banner';
import Navigator from './navigator/Navigator';

export default function App() {
  return (
      <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
