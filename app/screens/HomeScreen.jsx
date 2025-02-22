import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold text-blue-600 mb-4">🏠 Coffee Time App</Text>
      <TouchableOpacity className="bg-blue-500 p-4 rounded-lg">
        <Text className="text-white">Comenzemos a crearssss!!</Text>
      </TouchableOpacity>
    </View>
  );
}
