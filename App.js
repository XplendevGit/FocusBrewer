import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import './global.css';

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
  );
}
