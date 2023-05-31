import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, Touchable } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  texto: string,
  tipo: string,
  botonLargo: boolean,
  action: () => void
}

export const BotonCalc = ({texto, tipo, botonLargo, action} : Props) => {
  if (tipo === '1') {
    if (botonLargo) {
      return (
        <TouchableOpacity
          onPress={action}
        >
          <View style={[styles.boton, styles.botonLargo]}>
            <Text style={styles.botonTexto}>{texto}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <TouchableOpacity
          onPress={action}
        >
          <View style={styles.boton}>
            <Text style={styles.botonTexto}>{texto}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  } else if (tipo === '2') {
    if (botonLargo) {
      return (
        <TouchableOpacity
          onPress={action}
        >
          <View style={[styles.botonOp, styles.botonLargo]}>
            <Text style={styles.botonTextoOp}>{texto}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <TouchableOpacity
          onPress={action}
        >
          <View style={styles.botonOp}>
            <Text style={styles.botonTextoOp}>{texto}</Text>
          </View>
        </TouchableOpacity>
        
      )
    }
  } else {
    if (botonLargo) {
      return (
        <TouchableOpacity
          style={[styles.botonNum, styles.botonLargo]}
          onPress={action}
        >
          <View>
            <Text style={styles.botonTextoNum}>{texto}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <TouchableOpacity
          onPress={action}
        >
          <View style={styles.botonNum}>
            <Text style={styles.botonTextoNum}>{texto}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }
    
}
