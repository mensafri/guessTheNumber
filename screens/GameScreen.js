import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Tebakan Dia</Title>
      {/* TEBAK */}
      <View>
        <Text>Naik atau Turun?</Text>
        {/* + */}
        {/* - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }

});
