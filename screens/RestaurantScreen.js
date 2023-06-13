import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from '@react-navigation/native'
import { themeColors } from '../theme';

const RestaurantScreen = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params
  
  return (
    <View>
     <ScrollView>
      <View>
        <Image className="w-full h-72" source={item.image}/>
        <TouchableOpacity
        className="absolute top-14 left-4 bg-gray-500"
        onPress={()=> navigation.goBack()}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
          
        </TouchableOpacity>
      </View>
           </ScrollView>
    </View>
  )
}

export default RestaurantScreen