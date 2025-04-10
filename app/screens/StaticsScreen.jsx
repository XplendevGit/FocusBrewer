import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; // Para los gráficos interactivos
import * as SQLite from 'expo-sqlite';

const StatisticsScreen = () => {
  const [sessions, setSessions] = useState([]);
  const [db, setDb] = useState(null);

  // Obtener las sesiones de SQLite
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        const database = await SQLite.openDatabaseAsync('focusDB.db');
        setDb(database);

        // Ejecutar la consulta para obtener todas las sesiones
        const result = await database.execAsync('SELECT * FROM sessions');
        const data = result[0].rows._array;

        // Asegurarse de que las sesiones no sean nulas
        if (data && Array.isArray(data) && data.length > 0) {
          setSessions(data);
        } else {
          console.error('No se encontraron sesiones válidas.');
        }
      } catch (error) {
        console.error('Error al consultar las sesiones:', error);
      }
    };

    initializeDatabase();
  }, []);

  // Preparar los datos para el gráfico
  const data = {
    labels: sessions.length > 0 ? sessions.map(session => session.date || '') : [],  // Verificar si session.date existe
    datasets: [
      {
        data: sessions.length > 0 ? sessions.map(session => session.time || 0) : [], // Verificar que session.time esté disponible
      },
    ],
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Estadísticas de Enfoque</Text>
      <LineChart
        data={data}
        width={320}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: () => `rgba(0, 0, 0, 0.5)`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default StatisticsScreen;
