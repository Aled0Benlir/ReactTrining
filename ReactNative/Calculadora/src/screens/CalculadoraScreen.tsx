import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

interface PropNumber {
    number: string
}

export const CalculadoraScreen = () => {

    const [display, setDisplay] = useState('1550')

    const cleanDisplay = () => {
        setDisplay('')
    }

    const typeNumber = ({number} : PropNumber) => {
        setDisplay(display + number)
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>1500</Text>
            <Text style={styles.resultado}>{display}</Text>

            <View style={styles.fila}>
                <BotonCalc 
                    texto='C'  
                    tipo='1' 
                    botonLargo={false} 
                    action={cleanDisplay}/>
                <BotonCalc 
                    texto='+/-' 
                    tipo='1' 
                    botonLargo={false} 
                    action={ () => {
                        typeNumber
                    } }/>
                <BotonCalc 
                    texto='del' 
                    tipo='1'
                    botonLargo={false} 
                    action={() => {

                    }}/>
                <BotonCalc 
                    texto='/' 
                    tipo='2'
                    botonLargo={false} 
                    action={() => {
                        
                    }}/>
            </View>

            <View style={styles.fila}>
                <BotonCalc 
                    texto='7' 
                    tipo='3' 
                    botonLargo={false} 
                    action={() => {
                        typeNumber({number: '7'})
                    }}/>
                <BotonCalc 
                    texto='8' 
                    tipo='3'
                    botonLargo={false} 
                    action={() => {
                        typeNumber({number: '8'})
                    }}/>
                <BotonCalc 
                    texto='9' 
                    tipo='3'
                    botonLargo={false} 
                    action={() => {
                        typeNumber({number: '9'})
                    }}/>
                <BotonCalc 
                    texto='x' 
                    tipo='2'
                    botonLargo={false} 
                    action={() => {
                        
                    }}/>
            </View>

            <View style={styles.fila}>
                <BotonCalc 
                    texto='4' 
                    tipo='3'
                    botonLargo={false} 
                    action={() => {
                        typeNumber({number: '4'})
                    }}/>
                <BotonCalc 
                    texto='5' 
                    tipo='3'
                    botonLargo={false} 
                    action={() => {
                        typeNumber({number: '5'})
                    }}/>
                <BotonCalc
                    texto='6' 
                    tipo='3'
                    botonLargo={false} 
                    action={() => {
                        typeNumber({number: '6'})
                    }}/>
                <BotonCalc
                    texto='-' 
                    tipo='2'
                    botonLargo={false} 
                    action={() => {
                        
                    }}/>
            </View>

            <View style={styles.fila}>
                <BotonCalc 
                    texto='1' 
                    tipo='3'
                    botonLargo={false} 
                    action={() => {
                        typeNumber({number: '1'})
                    }}/>
                <BotonCalc 
                    texto='2' 
                    tipo='3'
                    botonLargo={false} 
                    action={() => {
                        typeNumber({number: '2'})
                    }}/>
                <BotonCalc 
                    texto='3' 
                    tipo='3'
                    botonLargo={false} 
                    action={() => {
                        typeNumber({number: '3'})
                    }}/>
                <BotonCalc 
                    texto='+' 
                    tipo='2'
                    botonLargo={false} 
                    action={() => {
                        
                    }}/>
            </View>

            <View style={styles.fila}>
                <BotonCalc 
                    texto='0' 
                    tipo='3'
                    botonLargo={true} 
                    action={() => {
                        typeNumber({number: '0'})
                    }}/>
                <BotonCalc 
                    texto='.' 
                    tipo='3'
                    botonLargo={false} 
                    action={() => {
                        typeNumber({number: '.'})
                    }}/>
                <BotonCalc 
                    texto='=' 
                    tipo='2'
                    botonLargo={false} 
                    action={() => {
                        
                    }}/>
            </View>
        </View>
    )
}
