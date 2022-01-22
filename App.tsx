import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AppHeader } from './src/components/AppHeader';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <Home />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
