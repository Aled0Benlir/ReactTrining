import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont().then()

const BarraSuperior = ({navigation, route}) => {

    const handlePress = () => {
        navigation.navigate('NuevoCliente')
    }

    return (
        <Icon.Button 
            name='add-circle-outline' 
            color='#FFF'
            size={25}
            onPress={ () => handlePress()}
        >
            Cliente
        </Icon.Button>
    )
}

export default BarraSuperior