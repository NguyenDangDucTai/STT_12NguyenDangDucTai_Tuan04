import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen2_a from "./AppClient/Screen2_a";
import Screen2_b from "./AppClient/Screen2_b";
import Screen2_c from "./AppClient/Screen2_c";
import Screen2_d from "./AppClient/Screen2_d";
import Plus2Number from "./AppClient/Plus2number";



export default function App() {
  return (

    <View style={styles.container}>
      {/*<Plus2Number></Plus2Number>*/}
      {/*<Screen2_a></Screen2_a>*/}
      {/*<Screen2_b></Screen2_b>*/}
      <Screen2_c></Screen2_c>
      {/*<Screen2_d></Screen2_d>*/}
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
