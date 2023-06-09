import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description, restaurants}) => {
  return (
    <View>
      <View>
<View className="mx-4">
    <Text className="font-bold text-2xl">{title}</Text>
    <Text className="text-gray-500 text-xs">{description}</Text>
</View>
<TouchableOpacity>
    <Text style={{color: themeColors.text}} className="font-semibold mx-4">See All</Text>
</TouchableOpacity>
      </View>
<ScrollView
horizontal
showsHorizontalScrollIndicator={false}
contentContainerStyle={{
    paddingHorizontal: 15
}}
className="overflow-visible py-5"
>
    {
        restaurants.map((restaurant, index)=>{
            return(
               <RestaurantCard
               item={restaurant}
               key={index}
               />
            )
        })
    }

</ScrollView>

    </View>
  )
}

export default FeaturedRow