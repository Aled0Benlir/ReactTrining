import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

const Animación1 = () => {

    const [animacion] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 1,
                duration: 500
            }
        ).start()
    }, [])
    

    return (
        <Animated.View 
            style={{
                opacity: animacion
            }}>
            <Text style={styles.texto}>Animación1</Text>
        </Animated.View>
        
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animación1