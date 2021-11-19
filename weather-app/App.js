import  React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Appbar from "./components/appbar"
import Search from "./components/searchbar"
import Card  from "./components/card"

export default function App(){
  return(
    <View>
    <Appbar />
    <Search />
    </View>
  )
}