import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Swiper from 'react-native-swiper'; // Importar swiper

export default function HomeScreen() {
  const [focusTime, setFocusTime] = useState(25); // Tiempo de focus en minutos
  const [selectedCoffee, setSelectedCoffee] = useState(0); // Café seleccionado (por defecto 0)

  // Listado de cafés (esto es solo un ejemplo, puedes agregar más imágenes)
  const coffeeList = [
    { image: require('../../assets/coffeeSkins/coffe1.png'), name: 'Café Espresso' },
    { image: require('../../assets/coffeeSkins/coffe1.png'), name: 'Café Latte' },
    { image: require('../../assets/coffeeSkins/coffe1.png'), name: 'Café Mocha' },
    { image: require('../../assets/coffeeSkins/coffe1.png'), name: 'Café Americano' },
    { image: require('../../assets/coffeeSkins/coffe1.png'), name: 'Café Macchiato' },
    { image: require('../../assets/coffeeSkins/coffe1.png'), name: 'Café Cortado' },
    { image: require('../../assets/coffeeSkins/coffe1.png'), name: 'Café Ristretto' },
    { image: require('../../assets/coffeeSkins/coffe1.png'), name: 'Café Doppio' },
    { image: require('../../assets/coffeeSkins/coffe1.png'), name: 'Café Capuccino' },
    { image: require('../../assets/coffeeSkins/coffe1.png'), name: 'Café Nitro' },
  ];

  // Función para manejar la selección del café
  const handleCoffeeSelect = (index) => {
    if (index < coffeeList.length) {
      setSelectedCoffee(index);
    }
  };

  // Función para comenzar el temporizador de focus
  const startFocusSession = () => {
    console.log(`Comenzando una sesión de focus de ${focusTime} minutos`);
  };

  return (
    <View className="flex-1 bg-gray-100 px-4 py-8">
      {/* Título */}
      <Text className="text-3xl font-bold text-center text-blue-600 mb-6">
        ¡Listo para comenzar tu sesión de Focus!
      </Text>

      {/* Slider de café con Swiper */}
      <Swiper
        showsPagination={true} // Muestra la paginación
        loop={false} // No hacer loop, el slider se detiene cuando llega al final
        onIndexChanged={handleCoffeeSelect} // Llama a la función al cambiar el slide
        activeDotColor="green" // Color del punto activo
        dotColor="gray" // Color de los puntos inactivos
      >
        {coffeeList.map((item, index) => (
          <View className="flex-1 items-center" key={index}>
            <Image
              source={item.image}
              className="w-48 h-48 rounded-full mb-4"
            />
            <Text className="text-lg text-center">{item.name}</Text>
          </View>
        ))}
      </Swiper>

      {/* Tiempo editable */}
      <View className="mt-8 mb-4">
        <Text className="text-xl font-semibold text-center">Tiempo de Focus (minutos):</Text>
        <TextInput
          value={focusTime.toString()}
          onChangeText={(text) => setFocusTime(parseInt(text))}
          keyboardType="numeric"
          className="mt-4 p-3 bg-white rounded-lg text-center text-2xl font-bold border border-gray-300"
        />
      </View>

      {/* Botón para iniciar sesión de focus */}
      <TouchableOpacity
        onPress={startFocusSession}
        className="bg-green-500 p-4 rounded-lg mt-6 flex justify-center items-center"
      >
        <Text className="text-white text-lg">Iniciar Focus</Text>
      </TouchableOpacity>
    </View>
  );
}
