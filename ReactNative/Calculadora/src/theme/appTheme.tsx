import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'flex-end'
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
    },

    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
        flex: 1
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'black',
        fontWeight: '300'
    },

    botonOp: {
        height: 80,
        width: 80,
        backgroundColor: 'rgb(254, 165, 0)',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTextoOp: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#FFF',
        fontWeight: '300'
    },

    botonNum: {
        height: 80,
        width: 80,
        backgroundColor: '#414141',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTextoNum: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#FFF',
        fontWeight: '300'
    },
    botonLargo: {
        flex: 1
    }
})