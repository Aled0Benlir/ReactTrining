import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { formatearFecha } from '../helpers'

const InformacionPaciente = ({ paciente, setPaciente, setModalPaciente }) => {
    return (
        <SafeAreaView style={styles.contenedor}>
            
            <Text style={styles.titulo}>
                Informacion {''}
                <Text style={styles.tituloBold}>Paciente</Text>
            </Text>
            <View>
                <Pressable
                    style={styles.btnCerrar}
                    onLongPress={ () => {
                        setModalPaciente(false)
                        setPaciente({})
                    }} >
                    <Text style={styles.btnCerrarTexto}>Cerrar</Text>
                </Pressable>
            </View>

            <View style={styles.contenido}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.valor}>{paciente.paciente}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Propietario:</Text>
                    <Text style={styles.valor}>{paciente.propietario}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.valor}>{paciente.email}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono:</Text>
                    <Text style={styles.valor}>{paciente.telefono}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha:</Text>
                    <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Sintomas:</Text>
                    <Text style={styles.valor}>{paciente.sintomas}</Text>
                </View>
                
            </View>

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#F59E0B',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    }, 
    tituloBold: {
        fontWeight: '900',
    }, 
    btnCerrar: {
        marginVertical: 30,
        backgroundColor: '#E06900',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnCerrarTexto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    contenido: {
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5
    },
    campo: {
        marginBottom: 10,
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        marginBottom: 3
    },
    valor: {
        fontWeight: '700',
        fontSize: 20,
        color: '#334155'
    }
})

export default InformacionPaciente