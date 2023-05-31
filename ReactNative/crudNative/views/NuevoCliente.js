import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Dialog, Headline, Paragraph, Portal, TextInput } from 'react-native-paper'
import globalStyles from '../styles/global'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
Icon.loadFont().then()

const NuevoCliente = ({navigation, route}) => {

  const {setConsultarApi} = route.params

  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [alerta, setAlerta] = useState(false)
  const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if(route.params.cliente) {
      const {nombre, telefono, correo, empresa} = route.params.cliente
      setNombre(nombre)
      setTelefono(telefono)
      setCorreo(correo)
      setEmpresa(empresa)
      setEstaEditando(true)
    } else {
      setEstaEditando(false)
    }
  }, [])
  

  const guardarCliente = async () => {
    if(nombre === ''|| telefono === '' || correo === '' || empresa === '') {
      setAlerta(true)
      return
    }

    const cliente = {nombre, telefono, correo, empresa}

    /**
       * Run json server:
       *    --->   json-server db.json 
       *    This run the server in the localhost
       *    but there's a problem with the android simulator
       *    how is an simulator can't access to mac localhost
       *    so is necesary to know the ip address of the mac,
       *    and to do that:
       *    --->   System Preferences -> Network -> select the active connection
       *      -> Advanced -> TCP/IP -> copy the IPv4 address 
       *    Then with the ip addres:
       *    --->   json-server --host (ip address) --port 3000 db.json
       *    example:
       *    --->   json-server --host 192.168.100.43 --port 3000 db.json
       *    But with this solution we can't use localhost anymore, 
       *    because localhost and the copied address are different
       * 
       */

    if (estaEditando) {
      const {id} = route.params.cliente
      cliente.id = id
      const url = `http://192.168.100.43:3000/clientes/${id}`
      try {
        await axios.put(url, cliente)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        // if (Platform.OS === 'ios') {
        //   await axios.post('http://localhost:3000/clientes', cliente)
        // } else {
          await axios.post('http://192.168.100.43:3000/clientes', cliente)
        // }
      } catch (error) {
        console.log(error)
      }
    }

    navigation.navigate('Inicio')

    limpiarFormulario()

    setConsultarApi(true)

  }

  const limpiarFormulario = () => {
    setNombre('')
    setTelefono('')
    setCorreo('')
    setEmpresa('')
  }

  return (
    <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}>
          {!estaEditando ? 'Añadir' : 'Actualizar'} Cliente
        </Headline>
        <TextInput 
          label='Nombre'
          placeholder='Alan'
          onChangeText={ texto => setNombre(texto)}
          value={nombre}
          style={styles.input}
        />
        <TextInput 
          label='Teléfono'
          placeholder='5555555555'
          onChangeText={ texto => setTelefono(texto)}
          value={telefono}
          style={styles.input}
        />
        <TextInput 
          label='Correo'
          placeholder='correo@correo.com'
          onChangeText={ texto => setCorreo(texto)}
          value={correo}
          style={styles.input}
        />
        <TextInput 
          label='Empresa'
          placeholder='Nombre Empresa'
          onChangeText={ texto => setEmpresa(texto)}
          value={empresa}
          style={styles.input}
        />
        <Button 
          icon='pencil-circle' 
          mode='containded'
          onPress={() => guardarCliente()}  
        >
          Guardar Cliente
        </Button>
        <Portal>
          <Dialog
            visible={alerta}
            onDismiss={() => setAlerta(false)}
          >
            <Dialog.Title>Error</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Todos los campos son obligatorios</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setAlerta(false)}>
                Ok
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      marginBottom: 20,
      backgroundColor: 'transparent'
    }
})

export default NuevoCliente