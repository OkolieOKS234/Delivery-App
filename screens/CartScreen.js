import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import {featured} from "../constants"
import { TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  
  return (
    <View className="bg-white flex-1">
{/* Back button */}
<View className="relative py-4 ">
  <TouchableOpacity
  onPress={()=> navigation.goBack()}
  style={{backgroundColor: themeColors.bgColor(1)}}
  className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
>
<Icon.ArrowLeft stroke="white" strokeWidth={3}/>
  </TouchableOpacity>
{/* Items */}
<View>
<Text className="text-center font-bold text-xl">Your Cart</Text>
<Text className="text-center text-gray-500">{restaurant.name}</Text>
</View>
</View>
{/* Delivery Time */}
<View 
style={{backgroundColor:themeColors.bgColor(0.2)}}
className="flex-row px-4 items-center">
<Image source={require("../assets/images/bikeGuy.png")}
className="w-20 h-20 rounded-full"
/>
<Text className="flex-1 pl-4">Delivery in 30 minutes</Text>
<TouchableOpacity>
  <Text className="font-bold" style={{color: themeColors.text}}>
    Change
  </Text>

</TouchableOpacity>


</View>
{/* dishes would be mapped here */}
<ScrollView
showsVerticalScrollIndicator={false}
contentContainerStyle={{
  paddingBottom:50
}}
className="bg-white pt-5"
>
{/* {
  restaurant.map((dish, index)=>{
    return (
    <View key={index}
    className="flex-row items-center spce-x-3 bg-white rounded-3xl mx-2 mb-3 shadow-lg"
    >
<Text className="font-bold" style={{color: themeColors.text}}>Se</Text>

    </View>
      )
  })
} */}

</ScrollView>
    </View>
  )
}

export default CartScreen