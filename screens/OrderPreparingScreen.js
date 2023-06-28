import { View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

const OrderPreparingScreen = () => {
  const navigation=useNavigation()
  useEffect(()=>{
    setTimeout(function(){
navigation.navigate("Delivery")
    },3000)
  })
  
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={require("../assets/images/delivery.gif")}/>
    </View>
  )
}

export default OrderPreparingScreen