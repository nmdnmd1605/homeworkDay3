/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView,View,Text,Image} from 'react-native'; 
import Noidung from './src/componemts/bai1';
import Tieude from './src/componemts/tieude';
import Anh from './src/componemts/anh';
import Noidung2 from './src/componemts/noidung';
import Noidungcuoi from './src/componemts/noidungcuoi';
import Button1 from './src/componemts/buttun';
const App = () => {
  return (
      <ScrollView>
      <View>
          <Tieude></Tieude>
          <Noidung></Noidung>
          <Anh></Anh>
          <Noidung2></Noidung2>
          <Anh></Anh>
          <Noidungcuoi></Noidungcuoi>
          <Button1></Button1>
      </View>
      </ScrollView>
  )
}

export default App;
