import React from 'react';
import {View, Image, Text} from 'react-native';
import Header from './src/component/header_3';

//Creat a component
const Page = () => {
const { horizontal, left, right, all, con, 
  down, one, two, three, four, textnormal, textpurple, bar,size1, size2 ,size3 ,size4} = styles;
      return (
        <View style={all}>
        <Header />
       <View style={horizontal}> 
        <Image
        source={require('./src/Asset/img_leagueoflegends.png')} 
        style={left}
        />
         <Image
        source={require('./src/Asset/img_counterstrike.png')} 
        style={right}
         />
        </View>
        <View style={horizontal}> 
        <Image
        source={require('./src/Asset/img_hearthstone.png')} 
        style={left}
        />
         <Image
        source={require('./src/Asset/img_dota2.png')} 
        style={right}
         />
        </View>
        <View style={horizontal}> 
        <Image
        source={require('./src/Asset/img_h1z1.png')} 
        style={left}
        />
         <Image
        source={require('./src/Asset/img_destiny.png')} 
        style={right}
         />
        </View>
        
        <View style={bar} />

     <View style={con}>
         <View style={down}>
        <View style={one}>
            <Image source={require('./src/Asset/btn_games_selected.png')} style= {size1}/>
            <Text style={textpurple}>Games</Text></View>
       <View style={two}>
              <Image source={require('./src/Asset/btn_channels.png')} style= {size2}/>
            <Text style={textnormal}>Channels</Text>
        </View>
       <View style={three}>
            <Image source={require('./src/Asset/btn_following.png')} style= {size3}/>
            <Text style={textnormal}>Following</Text>
        </View>
       <View style={four}>
            <Image source={require('./src/Asset/btn_me.png')} style= {size4}/>
            <Text style={textnormal}>Me</Text>
      </View>    
     </View>
     </View>
     </View>
 
);
};

const styles =
{
bar:
{ width: 375,
height: 0.5,
backgroundColor: 'rgba(0,0,0,0.2)',
top: -1 },
textpurple: {
   fontSize: 12,
   color: '#6441a5',
  textAlign: 'center',
   top: -15,
    left: 25,
    right: 50
},
textnormal: {
   fontSize: 12,
   color: '#bbbbbb',
   textAlign: 'center',
   top: -10,
   left: 70,
},
down: { flexDirection: 'row' },
con: {
   width: 375,
   height: 49,
   backgroundColor: '#ffffff' },

   
size1: {
   width: 45,
   height: 45,
   left: 25
},
size2: {
   width: 47,
   height: 37.5,
   left:70
},
size3: {
   width: 44,
   height: 41.5,
   left: 115
},
size4: {
   width: 42.5,
   height: 42.5,
   right: -150
},


all: {
      flex: 1,
   backgroundColor: '#f1f1f1'
},
horizontal: {
 flexDirection: 'row',
 flex: 1,
 top: 5
},
left: {
width: 180,
height: 180,
left: 5
},
right: {
width: 180,
height: 180,
left: 10
}
};
export default Page;
