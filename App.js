import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import  Header  from './componentes/Header.js';
import Body from './componentes/Body.js';
import { ScrollView } from 'react-native';


export default function App() {


  return (
    <ScrollView>
      <Header></Header> 
      <Body></Body>
      <Image></Image>
    </ScrollView>
  );

  }

 