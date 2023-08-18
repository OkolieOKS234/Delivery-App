import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Navigation from './Navigation';
import { NativeWindStyleSheet } from "nativewind";
import { Provider } from 'react-redux'

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    // <Provider store={store}>
   <Navigation/>
  //  </Provider>
  );
}

