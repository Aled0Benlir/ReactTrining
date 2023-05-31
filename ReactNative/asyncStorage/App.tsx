import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): JSX.Element {

  const [inputTexto, setInputTexto] = useState('')
  const [nombreStorage, setNombreStorage] = useState('')

  useEffect(() => {
    obtenerDatosStorage()
  }, [])
  

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', inputTexto)
      setNombreStorage(inputTexto)
    } catch (error) {
      console.log(error)
    }
  }

  const obtenerDatosStorage = async () => {
    try {
      const nombre = await AsyncStorage.getItem('nombre')
      setNombreStorage(nombre?? '')
    } catch (error) {
      console.log(error)
    }
  }

  const eliminarDatos = async () => {
    try {
      await AsyncStorage.removeItem('nombre')
      setNombreStorage('')
      setInputTexto('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <View style={styles.contenedor}>
        {nombreStorage && (
          <Text>Hola {nombreStorage}!!</Text>
        )}
        
        <TextInput 
          placeholder='Escribe tu nombre'
          style={styles.input}
          onChangeText={texto => setInputTexto(texto)}
        />
        <Button 
          title='Guardar'
          color='#333'
          onPress={() => guardarDatos()}
        />
        {nombreStorage && (
          <TouchableHighlight 
            style={styles.btnEliminar}
            onPress={() => eliminarDatos()}>
            <Text style={styles.textoEliminar}>Eliminar Nombre &times;</Text>
          </TouchableHighlight>
        )}
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40
  },
  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10,
  },
  textoEliminar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300
  },
});

export default App;
