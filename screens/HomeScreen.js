import {  ScrollView, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/Categories';


const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"/>
      <View className="flex flex-row items-center space-x-2 px-4 pb-7 pt-2">
      <View className="flex-row flex-1 items-center rounded-full p-3 border border-gray-3">
  <Icon.Search width="25" height="25" stroke="orange"/>      
<TextInput placeholder="Shops/Restaurants" className="ml-2 flex-1" />

<View className=" flex-row items-center space-x-1 border-l-2 pl-2 border-0 border-l-gray-300">
  <Icon.MapPin height="20" width="20" stroke="gray"/>
  <Text className="text-gray-500">Gombe, Nigeria</Text>

</View>

</View>
<View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
<Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="gray"/>
</View>
 </View>

{/* Main section */}
<ScrollView
showsVerticalScrollIndicator={false}
contentContainerStyle={{
  paddingBottom: 20
}}
>

  <Categories/>
</ScrollView>

      
    </SafeAreaView>
  )
}

export default HomeScreen