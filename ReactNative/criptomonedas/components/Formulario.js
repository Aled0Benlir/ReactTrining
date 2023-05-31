import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'

const Formulario = ({
    moneda, 
    criptomoneda, 
    setMoneda, 
    setCriptomoneda,
    setConsultarAPI 
}) => {

    const [criptomonedas, setCriptomonedas] = useState([])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url)
            setCriptomonedas(resultado.data.Data)
        }
        consultarAPI()
    }, [])
    

    const obtenerMoneda = moneda => {
        setMoneda(moneda)
    }
    const obtenerCriptomoneda = cripto => {
        setCriptomoneda(cripto)
    } 
    const cotizarPrecio = () => {
        if(moneda.trim() === '' || criptomoneda.trim() === '') {
            mostrarAlerta()
            return 
        }

        setConsultarAPI(true)
    }
    const mostrarAlerta = () => {
        Alert.alert(
            'Error...',
            'Ambos campos on validos',
            [
                {text: 'OK'}
            ]
        )
    }

    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={moneda => obtenerMoneda(moneda)}
                itemStyle={{ height: 100 }}
            >
                <Picker.Item label='-- Seleccione --' value="" />
                <Picker.Item label='Dolar de Estados Unidos' value="USD" />
                <Picker.Item label='Peso Mexicano' value="MXN" />
                <Picker.Item label='Euro' value="EUR" />
                <Picker.Item label='Libra esterlina' value="GBP" />
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
                selectedValue={criptomoneda}
                onValueChange={moneda => obtenerCriptomoneda(moneda)}
                itemStyle={{ height: 100 }}
            >
                <Picker.Item label='-- Seleccione --' value="" />
                {criptomonedas.map( cripto => (
                    <Picker.Item 
                        key={cripto.CoinInfo.Id}
                        label={cripto.CoinInfo.FullName} 
                        value={cripto.CoinInfo.Name} 
                    />
                ) )}
            </Picker>
            <TouchableHighlight 
                style={styles.btnCotizar}
                onPress={ () => cotizarPrecio() }>
                <Text style={styles.textoCotizar}>Cotizar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20,
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20,

    },
    textoCotizar: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})

export default Formulario