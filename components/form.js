
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, Keyboard} from 'react-native';
import {React, useState} from 'react'
import ResultadoIMC from './ResultadoIMC.js'

export default function Form() {

  const [altura, setAltura] = useState(null)
  const [peso, setPeso] = useState(null)
  const [message, setMessage] = useState("Preencha com o peso e a altura")
  const [imc, setIMC] = useState(null)
  const [TextButton, setTextButton] = useState("Calcular")

  function IMC_Calcular(){
    let alturaFormatada = altura.replace(',','.');
    let pesoFormatada = peso.replace(',','.');
    return setIMC((pesoFormatada/(alturaFormatada*alturaFormatada)).toFixed(2))
  }

  function ValidationImc(){
    if(peso != null && altura != null){
      IMC_Calcular();
      setPeso(null);
      setAltura(null);
      setMessage("Seu IMC é igual à: ")
      setTextButton("Calcular Novamente")
      return
    }
    else{
      setIMC(null);
      setMessage("Preencha com o peso e a altura");
      setTextButton("Calcular")
    }
    
  }


  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContent}>
      <View style={styles.form}>
          <Text style={styles.formLabel}>Peso</Text>
          <TextInput 
            style={styles.input}
            placeholder="Ex. 54" 
            keyboardType="numeric" 
            onChangeText={setPeso}
            value={peso}
          ></TextInput>
          
          <Text style={styles.formLabel}>Altura</Text>
          <TextInput 
            style={styles.input}
            placeholder="Ex. 1.74"  
            keyboardType="numeric"  
            onChangeText={setAltura}
            value={altura}
          ></TextInput>

          <TouchableOpacity style={styles.buttonCalculator}
            onPress={() => {ValidationImc(); Keyboard.dismiss}}
          >
            <Text style={styles.textButton}>{TextButton}</Text>
          </TouchableOpacity>
          {/* <Button  onPress={() => ValidationImc()} title={TextButton}/> */}
      </View>
      <ResultadoIMC resultado={imc} MensagemResultado={message} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  formContent: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: 30,
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  form:{
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding:10,

  },
  formLabel:{
    color: 'black',
    fontSize:18,
    paddingLeft: 20
  },
  input:{
    width: '90%',
    borderRadius:50,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft:10
  },
  buttonCalculator:{
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
    backgroundColor: '#ff0043',
    paddingTop:14,
    paddingBottom:14,
    marginLeft:12,
    marginTop:30

  },
  textButton:{
    fontSize: 20,
    backgroundColor: '#ff0043',
  }
})
