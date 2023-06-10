import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Navigation from './Navigation';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
   <Navigation/>
  );
}

