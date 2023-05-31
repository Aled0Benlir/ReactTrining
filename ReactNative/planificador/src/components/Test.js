import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    Button 
} from 'react-native'
import FormularioGasto from './FormularioGasto'

const Test = ({list}) => {

    const [item, setItem] = useState('')

    useEffect(() => {
        console.log('This will show once after load the view')
    }, [])
    useEffect(() => {
        console.log('This will show each time the list is modified')
    }, [list])

    const handleAction = () => {
        console.log('Esto es una función')
    }
    
    return (
        <View>
            <Text>Test</Text> 
            <FormularioGasto 
                item={item}
                setItem={setItem}
            />
            <Button onPress={handleAction}>Acción</Button>
        </View>
    )
}

export default Test

