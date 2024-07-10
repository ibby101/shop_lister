import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handleItemClick = () => {
    Alert.alert('Item Collected!');
  };

  return (
    <View style={styles.container}>
      <Text>shoplister</Text>
      <StatusBar style="auto" />
      <Button title='Eggs' onPress={handleItemClick} />
    </View>
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
