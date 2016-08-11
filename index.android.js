// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai10ComponentPhan1 extends Component {
  render() {
    return (
      <View>

        <OVuong></OVuong>
        <OVuong></OVuong>
        <OVuong></OVuong>
      </View>
    );
  }
}


// Khai báo Component
export default class OVuong extends Component{

  render(){

    return(

      <View style={ao.teo}></View>  
    );
  }
}

// Khai báo CSS
var ao = StyleSheet.create({
  
  teo:{
    backgroundColor:"yellow",
    width:100,
    height:100,
    borderWidth:1,
    borderColor:'violet'

  }
});

// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai10ComponentPhan1', () => Bai10ComponentPhan1);
