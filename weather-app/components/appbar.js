import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default function Appbar(){
  return(
    <Header 
    backgroundColor={"blue"}
    centerComponent={{
    text:"WEATHER APP",
    style:{color:"white",fontSize:20}
    }}/>
  )
}