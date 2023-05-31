import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Animación7 = () => {

    const [animación1] = useState(new Animated.Value(0))
    const [animación2] = useState(new Animated.Value(1))

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animación1, {
                toValue: 300,
                duration: 1000
            }),
            Animated.spring(animación2, {
                toValue: 10
            }),
            Animated.spring(animación2, {
                toValue: 1
            }),
            Animated.timing(animación1, {
                toValue: 600,
                duration: 1000
            }),
        ]).start()
    }, [])
    
    const estiloAnimacion = {
        transform: [
            {translateY: animación1},
            {scale: animación2}
        ]
    }

    return (
        <View>
            <Animated.View
                style={[
                    styles.caja,
                    estiloAnimacion
                ]}>

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animación7