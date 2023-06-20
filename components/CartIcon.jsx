import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

const CartIcon = () => {
    const navigation = useNavigation();
  return (
    <View className="absolute z-50 w-full bottom-5">
      <TouchableOpacity 
      onPress={()=>
        navigation.navigate("Cart")

      }
      style={{backgroundColor:themeColors.bgColor(1)}}
      className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View style={{ color: '#fff', fontSize: 12 }}>
            <Text className="font-extrabold text-white text-lg" >
                3
            </Text>
        </View>
<Text className="flex-1 text-center font-extrabold text-white text-lg">
View Cart
</Text>
{/* Total number of items in the Cart */}
<Text className="font-extrabold text-white text-lg">
₦‎{6000.00}
</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartIcon