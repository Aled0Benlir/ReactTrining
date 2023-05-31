import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

const Animación2 = () => {

    const [animacion] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 450,
                duration: 1000
            }
        ).start()
    }, [])
    

    return (
        <Animated.View 
            style={[
                styles.caja,
                {
                    width: animacion,
                    height: animacion
                }
            ]}>
        </Animated.View>
        
    )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animación2