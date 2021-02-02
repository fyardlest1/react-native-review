import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = () => {
    const [color, setColor] = useState([])

    return (
        <View>
            <Button 
                title='Add a Color'
                onPress={() => {
                    setColor([...color, randomRgb()])
                }} 
            />            
            <FlatList style={{paddingLeft: 20}}                
                data={color}
                renderItem={({item}) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item, marginVertical: 5}} />
                }}
                keyExtractor={item => item}
            />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({})

export default ColorScreen
