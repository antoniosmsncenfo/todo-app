import React, { useDebugValue, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskComponent } from '../components/TaskComponent';
export const MainAppScreen = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState(['']);

  const handleAddTask = (): void => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask('');
  };

  const completeTask = (index: number): void => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tareas del día</Text>
        <View style={styles.items} >
          {
            taskItems.map((value, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <TaskComponent title="value" />
                </TouchableOpacity>
              );
            });
          }
        </View>

      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>

        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

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
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 60,
    width: '75%',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {},
});
