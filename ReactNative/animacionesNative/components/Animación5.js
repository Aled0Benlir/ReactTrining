import React, { useState } from 'react'
import { Animated, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const Animación5 = () => {

    const [ animacion ] = useState( new Animated.Value(1))

    const presionarBtn = () => {
        Animated.spring( animacion, {
            toValue: .8
        }).start()
    }
    const soltarBoton = () => {
        Animated.spring( animacion, {
            toValue: 1,
            friction: 1, // más bajo, mayor rebote
            tension: 60
        }).start()
    }
    const estiloAnimacion = {
        transform: [{ scale: animacion }]
    }

    return (
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={ () => presionarBtn() }
                onPressOut={ () => soltarBoton()}
            >
                <Animated.View style={[styles.btn, estiloAnimacion]}>
                    <Text style={styles.texto}>
                        Iniciar Sesión
                    </Text>
                </Animated.View>
                
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center'
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28,
    }
})

export default Animación5