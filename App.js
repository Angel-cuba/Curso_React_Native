import { SafeAreaView, StyleSheet, View } from 'react-native';
import Banner from './views/Banner';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Banner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
