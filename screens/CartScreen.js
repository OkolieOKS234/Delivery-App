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
  {
restaurant.dishes.map((dish,index)=>{
  return(
    <View className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded" key={index}>
      <Text className="font-bold" style={{color: themeColors.text}}>
2x
      </Text>
<Image className="h-14 w-14 rounded-full"
source={dish.image}
/>
<Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
<Text className="font-semibold text-base">&#8358;
{dish.price}</Text>
<TouchableOpacity
className="p-1 rounded-full"
style={{backgroundColor:themeColors.bgColor(1)}}
>
  <Icon.Minus strokeWidth={3} height={20} stroke="white"/>

</TouchableOpacity>

    </View>
  )
})
}


</ScrollView>
{/* Total Amount */}
<View className="px-6 p-6 rounded-t-3xl " style={{backgroundColor: themeColors.bgColor(0.2)}}>
<View className="flex-row justify-between">
  <Text className="text-gray-700">Total:</Text>
  <Text className="text-gray-700">&#8358;6938
</Text>
</View>

<View className="flex-row justify-between">
  <Text className="text-gray-700">Delivery fee:</Text>
  <Text className="text-gray-700">&#8358;200
</Text>
</View>

<View className="flex-row justify-between pt-2 border border-gray-800">
  <Text className="text-gray-700 font-bold ">Subtotal:</Text>
 
  <Text className="text-gray-700 font-bold">&#8358; 7138
</Text>
</View>

</View>

    </View>
  )
}

export default CartScreen