import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<{}>;
export default function HomeScreen({navigation} : Props) {
    const onPress = () => navigation.navigate('intervalIdentify' as never);
    return(
        <View style={styles.container}>
            <Text>Welome to Notes</Text>
            <Button title='Interval Identify' onPress={onPress}/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });