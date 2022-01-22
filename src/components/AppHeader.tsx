import { Button, StyleSheet, Text, View } from 'react-native';

export function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <View>
        <Button onPress={() => console.log('a')} />
        <Button />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  title: {
    fontWeight: '700',
  },
  buttonAdd: {
    paddingEnd: '0.2em',
  },
});
