import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string
    position?: 'br' | 'bl'
    onPress: () => void
}
export const Fab = ({title, onPress, position = 'br'}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.8}
                style={[
                    fabStyles.fabLocation,
                    (position === 'bl') ? fabStyles.left : fabStyles.right
                ]}
            >
                <View style={[
                    fabStyles.fab,
                    fabStyles.shadow
                ]}>
                    <Text style={fabStyles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[
                    fabStyles.fabLocation,
                    (position === 'bl') ? fabStyles.left : fabStyles.right
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={[
                        fabStyles.fab,
                        fabStyles.shadow
                    ]}>
                        <Text style={fabStyles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android()
}

const fabStyles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 30
      },
      left: {
        left: 30
      },
      right: {
        right: 30
      },
      fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
      },
      fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
      },
      shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
      }
})