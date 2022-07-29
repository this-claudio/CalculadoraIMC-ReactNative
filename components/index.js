import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

export default function Title() {
  return (
    <View style={styles.BoxTitle}>
      <Text style={styles.TextTitle}>ONEBITHEALTH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  BoxTitle:{
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  TextTitle:{
    color:'#ff0043',
    fontSize:24,
    fontWeight: 'bold'
  }
})