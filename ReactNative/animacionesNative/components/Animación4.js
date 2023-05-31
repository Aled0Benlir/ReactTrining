import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Animación4 = () => {

    const [animacion] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 360,
                duration: 500
            }
        ).start()
    }, [])
    
    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }

    return (
        <View>
            <Animated.Text style={[styles.texto, estiloAnimacion]}>
                Animación4
            </Animated.Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    texto: {
        width: 100,
        height: 100, 
        backgroundColor: 'cornflowerblue'
    }
})

export default Animación4