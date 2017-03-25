//Import libraries for making a component

import React from 'react';
import {Text ,View, Image} from 'react-native';

//Creat a component
const Header = ()=> {
   const {textstyle ,headerstyle ,bar ,pic ,search} = styles;
   return (
       <View style = {headerstyle}>
        <View style = {bar}>
           <Image source= {require('../Asset/icon_search.png')}
           style = {search} />
           <Text style = {textstyle}>Search</Text>
           </View>
           <Image source= {require('../Asset/btn_cast.png')}
           style = {pic} />
           </View>
   );
};


const styles = {
    headerstyle: {
        backgroundColor: '#6441a5',
        justifyContent: 'center',
        width: 375,
        height: 64,
        flexDirection: 'row'
    },
    bar: {
        backgroundColor: 'rgb(49,31,83)',
        width: 320,
        height: 30,
        top: 26.5,
        borderRadius: 5,
        // left: -2,
        flexDirection: 'row'
    },
    textstyle: {
        fontSize: 15,
        top: 6,
        left: 14,
        height: 18,
        color: 'rgb(185,163,227)'
    },
    pic: {
        width: 33,
        height: 33,
        top: 25,
        right: -5
    },
    search: {
        width: 19,
        height: 19,
        left: 11,
        top: 6
    }
};

export default Header;
// AppRegisterComponent('wk5', ()=> wk5);