import {  Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";


const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"/>
      <View className="flex flex-row items-center space-x-2 px-4 pb-7">
      <View className="flex-row flex-1 items-center rounded-full p-3 border border-gray-3">
<Icon.Search width="25" height="25" stroke="orange"/>      
<TextInput placeholder="Shops/Restaurants" className="ml-2 flex-1" />
</View>
 </View>
      
    </SafeAreaView>
  )
}

export default HomeScreen