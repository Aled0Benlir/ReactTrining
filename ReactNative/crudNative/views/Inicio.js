import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { FAB, Headline, List, Button } from 'react-native-paper'
import globalStyles from '../styles/global'

const Inicio = ({navigation}) => {

  const [clientes, setClientes] = useState([])
  const [consultarApi, setConsultarApi] = useState(true)

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const resultado = await axios.get('http://192.168.100.43:3000/clientes')
        setClientes(resultado.data)
        setConsultarApi(false)
      } catch (error) {
        console.log(error)
      }
    }
    
    if (consultarApi) {
      obtenerClientesApi()
    }
  }, [consultarApi])
  

  return (
    <View style={globalStyles.contenedor}>
      <Button 
        icon='plus-circle'
        onPress={() => navigation.navigate('NuevoCliente', {setConsultarApi})} >
        Nuevo Cliente
      </Button>
      <Headline style={globalStyles.titulo}>
        {clientes.length > 0 ? 'Clientes' : 'Aún no hay clientes'}
      </Headline>
      <FlatList 
        data={clientes}
        keyExtractor={cliente => (cliente.id).toString()}
        renderItem={({item}) => (
          <List.Item 
            title={item.nombre}
            description={item.empresa}
            onPress={() => navigation.navigate('DetallesCliente', {item, setConsultarApi})}
          />
        )}
      />
      <FAB 
        icon="plus"
        style={globalStyles.fab}
        onPress={() => navigation.navigate('NuevoCliente', {setConsultarApi})}
      />
    </View>
  )
}

export default Inicio