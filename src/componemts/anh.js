import React from 'react'
import {ScrollView,View,Text,Image,StyleSheet} from 'react-native'; 
const styles = StyleSheet.create({
    tinyLogo: {
      width: 250,
      height: 150,
      marginLeft:70,
      marginTop:20
    },
    A:{
        fontSize:11,
        color:"green",
        marginLeft:155
    }
  });
const Anh = () => {
    return (
        <View>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i.pinimg.com/originals/3a/3c/ab/3a3cabd94347cf64dade52882308c780.jpg',
        }}
        />
        <Text style={styles.A}>Ảnh One Piece</Text>
        </View>
    );
};
export default Anh;