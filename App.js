import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex01';

import Atividade01 from './src/atividades/atv01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade01 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
});
