import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Animación6 = () => {

    const [animación1] = useState(new Animated.Value(0))
    const [animación2] = useState(new Animated.Value(-50))

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animación2, {
                    toValue: -30,
                    duration: 0
                }),
                Animated.timing(animación1, {
                    toValue: 60,
                    duration: 500
                }),
                Animated.timing(animación2, {
                    toValue: 30,
                    duration: 500
                }),
                Animated.timing(animación1, {
                    toValue: 0,
                    duration: 500
                }),
                Animated.timing(animación2, {
                    toValue: -30,
                    duration: 500
                }),
            ])
        ).start()
    }, [])
    
    const estiloAnimacion = {
        transform: [
            {translateY: animación1},
            {translateX: animación2},
        ]
    }

    return (
        <View style={{alignItems: 'center' }}>
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
        width: 10,
        height: 10,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animación6