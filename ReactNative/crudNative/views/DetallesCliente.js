import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button, FAB, Headline, Subheading } from 'react-native-paper'
import globalStyles from '../styles/global'
import axios from 'axios'

const DetallesCliente = ({navigation, route}) => {
  const {setConsultarApi} = route.params
  const {nombre, telefono, correo, empresa, id} = route.params.item

  const mostrarConfirmación = () => {
    Alert.alert(
      '¿Deseas eliminar este cliente?',
      'Un contacto eliminado no se puede recuperar',
      [
        {text: 'Si, Eliminar', onPress: () => eliminarContacto()},
        {text: 'Cancelar', style: 'cancel'}
      ]
    )
  }

  const eliminarContacto = async () => {
    const url = `http://192.168.100.43:3000/clientes/${id}`
    try {
      await axios.delete(url)
    } catch (error) {
      console.log(error)
    }

    navigation.navigate('Inicio')
    
    setConsultarApi(true)
  }

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={styles.texto}>
        Empresa: <Subheading>{empresa}</Subheading>
      </Text>
      <Text style={styles.texto}>
        Correo: <Subheading>{correo}</Subheading>
      </Text>
      <Text style={styles.texto}>
        Teléfono: <Subheading>{telefono}</Subheading>
      </Text>
      <Button 
        style={styles.boton} 
        mode='contained' 
        icon='cancel'
        onPress={mostrarConfirmación}>
        Eliminar Cliente
      </Button>
      <FAB 
        icon="pencil"
        style={globalStyles.fab}
        onPress={() => navigation.navigate('NuevoCliente', {cliente: route.params.item, setConsultarApi})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    texto: {
      marginBottom: 20,
      fontSize: 18
    },
    boton: {
      marginTop: 100,
      backgroundColor: 'red'
    }
})

export default DetallesCliente