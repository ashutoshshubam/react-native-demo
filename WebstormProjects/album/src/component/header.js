import React from 'react';
import {Text,View }from 'react-native';
const Header = () => {
    const {textStyle,viewStyle} = style;
    return(
        <View style = {viewStyle}>
        <Text style ={ textStyle.headerText }>Albums !</Text>
        </View>
            );
};
const style = {
    viewStyle : {
        backgroundColor :'#F8F'
    },
    textStyle:{
        fontSize:20
    }
};
export default Header;
