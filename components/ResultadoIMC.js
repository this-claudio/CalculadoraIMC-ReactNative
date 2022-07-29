
import { StyleSheet, Text, View, TouchableOpacity, Button, Share } from 'react-native';
import React from 'react'

export default function ResultadoIMC(props) {

  const onShare = async () => {
    const result = await Share.share({
      message: 'Hoje meu IMC é ' + props.resultado
    })
  }

  return (
    <View style={styles.BoxIMC}>
      <Text style={styles.resultado}>{props.MensagemResultado}</Text>
      <Text style={styles.message}>{props.resultado}</Text>
      <View>
        {props.resultado != null ? <Button color='#ff0043' title="Compartilhar" onPress={onShare}/>: <View/> }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    BoxIMC:{
        flex:1,
        marginTop:15,
        paddingTop:60,
        borderRadius: 50,
        textAlign: 'center',
        alignItems: 'center',
        width:'100%',
    },
    resultado:{
        fontSize:18,
        color: '#ff0043',
        fontWeight: 'bold',
    },
    message: {
        fontSize:48,
        color: '#ff0043',
        fontWeight: 'bold',
    },
    
})