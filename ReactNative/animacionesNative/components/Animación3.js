import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Animación3 = () => {

    const [animacion] = useState(new Animated.Value(14))

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 40,
                duration: 500
            }
        ).start()
    }, [])
    

    return (
        <View>
            <Animated.Text style={[styles.texto, { fontSize: animacion}]}>
                Animación3
            </Animated.Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animación3