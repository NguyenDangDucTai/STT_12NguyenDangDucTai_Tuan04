import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


function Plus2Number() {
  
  const [a, seta] = useState('');
  const [b, setb] = useState('');
  const [c, setc] = useState(0);

  return (
    <View style={styles.container}>
      <label>Nhập a:</label>
      <TextInput onChangeText={seta} value={a} keyboardType='numeric' style={{borderWidth: 1}}></TextInput>
      <label>Nhập b:</label>
      <TextInput onChangeText={setb} value={b} keyboardType='numeric' style={{borderWidth: 1}}></TextInput>
      <Button title='Click de cong' onPress={()=>{
        setc(parseFloat(a)+ parseFloat(b));
      }}>
      </Button>
      <text>Ket qua: {c}</text>
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
export default Plus2Number;
