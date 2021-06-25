import React from 'react';
import {ScrollView,View,Text,Image,StyleSheet,Button,Alert} from 'react-native'; 
import Anh from './anh';
const Button1 = () =>
{
    return (
        <Button
            onPress={()=>{return(
                <View>aaaa</View>
            )}}
            title="Trang Tiep Theo"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    );
};
export default Button1;