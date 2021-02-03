import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  return (
    <View >
      <Text style={styles.text}>Yayad Demo App</Text>
      <Button style={styles.container}
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" 
      />
      <Button 
        title='Go to List Demo' 
        onPress={() => navigation.navigate('List')} 
      />
      <Button 
        title='Go to Image Demo'
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title='Go to Color Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button 
        title='Go to SquareReducer Demo'
        onPress={() => navigation.navigate('SquareReducer')}
      />
      <Button 
        title='Go to TextScreen Demo'
        onPress={() => navigation.navigate('Text')}
      />
      <Button 
        title='Go to Box Demo'
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
});

export default HomeScreen;