import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text style={styles.title}>Enter Password</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 5 ? 
            <Text style={styles.title}>
                Password most be at least 5 character or more
            </Text>
            : null
        }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    title: {
        marginTop: 5,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default TextScreen
