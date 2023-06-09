import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function App() {
  return (
    <View>
      <Text className="text-lg text-red-700 text-center flex justify-center items-center my-80">code with OK$</Text>
      <StatusBar style="auto" />
    </View>
  );
}

