import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";

const DishRow = ({ item }) => {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-1">
        <View className="pl-4">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">&#x20a6;{item.price}</Text>
          
          {/* Minus Icon */}
          <TouchableOpacity className="p-1 rounded-full " style={{backgroundColor: themeColors.bgColor(1)}}>
            <Icon.Minus strokeWidth={3} height={20} width={20} stroke={"white"}/>
          </TouchableOpacity>
          <Text className="px-2">{4}</Text>
{/* Plus Icon */}
<TouchableOpacity className="p-1 rounded-full " style={{backgroundColor: themeColors.bgColor(1)}}>
            <Icon.Plus strokeWidth={3} height={20} width={20} stroke={"white"}/>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default DishRow;
