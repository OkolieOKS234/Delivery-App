import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { featured } from '../constants';
import * as Icon from "react-native-feather"
import MapView,{ Marker } from 'react-native-maps';

import { themeColors } from '../theme';



const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = featured.restaurants[0]
  return (
    <View className="flex-1">

      <MapView
      initialRegion={{
        latitude: restaurant.lat,
        longitude: restaurant.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      className="flex-1"
      mapType="standard"
      >
{/* space for marker */}
<Marker
coordinate={{
    latitude: restaurant.lat,
    longitude: restaurant.lng
}}
title= {restaurant.name}
description= {restaurant.description}
pinColor= {themeColors.bgColor(1)}
/>


      </MapView>
      {/* end of the map view component*/}
      <View className="bg-white  rounded-t-3xl -mt-12 relative">
        <View className="flex-row justify-between px-5 pt-10">
            <View>
            <Text className=" text-gray-700 font-semibold text-lg">Estimated Arrival</Text>
            <Text className=" text-gray-700 text-3xl font-extrabold">20-30 minutes</Text>
            </View>

            <Image className="w-24 h-24" soource={require("../assets/images/bikeGuy2.gif")}/>
        </View>
       <View
       style={{backgroundColor: themeColors.bgColor(0.8)}}
       className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
       >
    <View className="p-1 rounded-full "
    style={{backgroundColor: "rgba(255,255,255,0.4)"}}
    >
<Image className="h-16 w-16 rounded-full" source={require("../assets/images/profile-pic.png")}/>
    </View>
    <View className="flex-1 ml-3">
<Text className="text-lg font-bold text-white">
    Usman Farouk
</Text>
<Text className="text-lg font-bold text-white">
    Your Delivery Man
</Text>
    </View>
<View className="flex-row items-center space-x-3 mr-3">
<TouchableOpacity className="bg-white p-2 rounded-full">
<Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)}/>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate("Home")} className="bg-white p-2 rounded-full">
<Icon.X  stroke={"red"} strokeWidth={5}/>
</TouchableOpacity>
</View>

       </View>
      </View>
    </View>
  )
}

export default DeliveryScreen