import React from 'react'
import {ScrollView,View,Text,Image,StyleSheet} from 'react-native'; 

const styles = StyleSheet.create({
    tinyLogo: {
      fontWeight:"bold",
      fontSize:18,
      margin:15
    }
  });

const Tieude = () => {
    return (
        <Text style={styles.tinyLogo}>
            Thêm 135 ca Covid-19, hơn nửa ở TP HCM
        </Text>
    );
};
export default Tieude;