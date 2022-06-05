import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TaskComponent } from './components/TaskComponent';

export const MainAppScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tareas del día</Text>
        <View style={styles.items} />
        <TaskComponent title="tarea 1" />
        <TaskComponent title="tarea 2" />
        <TaskComponent title="tarea 3" />
        <TaskComponent title="tarea 4" />
        <TaskComponent title="tarea 5" />
        <TaskComponent title="tarea 6" />
        <TaskComponent title="tarea 6" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
});
