import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { featured } from '../constants';
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
        </View>
       
      </View>
    </View>
  )
}

export default DeliveryScreen