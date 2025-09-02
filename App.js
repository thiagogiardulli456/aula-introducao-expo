import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex01';
import Exemplo02 from './src/exemplos/ex02';

import Atividade01 from './src/atividades/atv01';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo02 />
      <StatusBar style="light" />
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
