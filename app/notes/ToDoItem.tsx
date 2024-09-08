import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ImageBackground, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import NavBar from '@/components/NavBar';

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ImageBackground source={require('@/assets/sky3.jpg')} className="flex-1 bg-cover p-3">
    <View className="flex-1 p-4 mt-6">
      <Text className="text-2xl font-bold mb-4 text-center">Things that you need to get done before the trip</Text>

      <View className="flex-row items-center mb-4">
        <TextInput
          className="flex-1 border border-gray-300 p-2 rounded"
          placeholder="Adaugă o notiță..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity
          className="bg-blue-500 p-3 rounded ml-2"
          onPress={addTodo}
        >
          <Text className="text-white font-bold">Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            className={`mt-3 p-3 rounded border ${item.completed ? 'border-green-500' : 'border-gray-300'} flex-row justify-between items-center`}
          >
            <View className="flex-1 pr-4">
              <Text className={`${item.completed ? 'text-green-500 line-through' : ''}`}>
                {item.text}
              </Text>
            </View>
            <View className="flex-row items-center">
              <TouchableOpacity onPress={() => toggleComplete(item.id)} className="mr-4">
                <MaterialIcons
                  name={item.completed ? "check-circle" : "check-circle-outline"}
                  size={24}
                  color={item.completed ? "green" : "gray"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <MaterialIcons name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
        <SafeAreaView>
            <NavBar iconColor='black'/>
        </SafeAreaView>
    </ImageBackground>
  );
};

export default ToDoList;
