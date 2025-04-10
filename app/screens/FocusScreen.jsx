import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper'; // Importar swiper
import * as SQLite from 'expo-sqlite';

const FocusScreen = () => {
  const [focusTime, setFocusTime] = useState(30); // Tiempo por defecto 30 minutos
  const [timeLeft, setTimeLeft] = useState(focusTime * 60); // En segundos
  const [coffeeLevel, setCoffeeLevel] = useState(100); // 100% inicial de café
  const [db, setDb] = useState(null); // Estado para la base de datos

  // Abrir la base de datos de manera asincrónica
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        const database = await SQLite.openDatabaseAsync('focusDB.db');
        setDb(database);

        // Crear la tabla si no existe
        await database.execAsync(`
          CREATE TABLE IF NOT EXISTS sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            time INTEGER,
            date TEXT
          );
        `);

        console.log('Tabla creada o ya existe');
      } catch (error) {
        console.error('Error al abrir o crear la base de datos:', error);
      }
    };

    initializeDatabase();
  }, []);

  // Función para empezar el focus
  const startFocus = async () => {
    if (db) {
      setCoffeeLevel(100);
      setTimeLeft(focusTime * 60);
      await insertSession(focusTime); // Guardamos la sesión en la base de datos
    }
  };

  // Función para abandonar el focus
  const cancelFocus = () => {
    setTimeLeft(0);
    setCoffeeLevel(100);
  };

  // Función para insertar la sesión en la base de datos
  const insertSession = async (time) => {
    const date = new Date().toLocaleDateString(); // Fecha actual
    try {
      await db.runAsync('INSERT INTO sessions (time, date) VALUES (?, ?)', [time, date]);
      console.log('Sesión insertada con éxito');
    } catch (error) {
      console.error('Error al insertar sesión:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Image source={{ uri: 'path_to_cup_image' }} style={{ width: 200, height: 200 }} />
      <Text style={{ fontSize: 36, color: 'white', marginVertical: 20 }}>
        {Math.floor(timeLeft / 60)}:{timeLeft % 60}
      </Text>

      {/* Reemplazo de Slider por Swiper */}
      <Swiper
        style={{ height: 60, marginBottom: 20 }}
        showsButtons={false} // Puedes activar los botones de navegación si lo deseas
        loop={false} // Si quieres que se repita el swiper, ponlo en true
        index={focusTime / 60} // Aquí se puede definir el valor inicial que es igual a `focusTime` en minutos
        onIndexChanged={(index) => setFocusTime(index)} // Actualiza focusTime al cambiar de "slide"
      >
        {/* Agregar elementos dentro del swiper */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Tiempo: {focusTime} minutos</Text>
        </View>
      </Swiper>

      <TouchableOpacity onPress={startFocus} style={{ padding: 20, backgroundColor: '#00D1B2', borderRadius: 10 }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Iniciar Focus</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={cancelFocus} style={{ padding: 20, backgroundColor: '#FF6347', borderRadius: 10, marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Abandonar Focus</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FocusScreen;
