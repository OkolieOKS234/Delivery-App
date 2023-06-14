import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'

const CartIcon = () => {
  return (
    <View className="absolute z-50 w-full bottom-5">
      <TouchableOpacity style={{backgroundColor:themeColors.bgColor(1)}}
      className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <Text style={{ color: '#fff', fontSize: 12 }}></Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartIcon