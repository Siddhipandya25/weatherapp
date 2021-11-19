import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';
import Card from './card';
export default function Search() {
  const [scr, setScr] = useState('');
  const [scrc, setScrc] = useState('');

  function handleChange(val) {
    setScr(val);
  }
  function handleClick(val) {
    setScrc(scr);
  }

  return (
    <View style={style.main}>
      <View style={style.text}>
        <TextInput placeholder="Enter your city" 
        placeholderTextColor="black"
        value={scr} 
        onChangeText={(val)=>handleChange(val)} />
      </View>
      <View style={style.btn}>
        <Button title="SEARCH" color="pink" onPress={handleClick} />
      </View>
       <Card title={scrc} />
    </View>
  );
}
const style = StyleSheet.create({
  main: {
    margin: 20,
  },
  btn: {
    marginTop: 50,
    margin: 20,
  },
  text: {
    padding: 20,
    borderWidth: 4,
    margin: 20,
    borderColor: 'red',
  },
});
