import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';

interface BottomNavBarProps {
  iconColor?: string; // Proprietate pentru a seta culoarea iconițelor
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ iconColor = 'white' }) => {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const router = useRouter();

  const tabs = [
    { name: 'Home', icon: 'home', route: '/' },
    { name: 'Game', icon: 'gamepad', route: '/game/Game' },
    { name: 'Trip', icon: 'plane', route: '../Trips' },
    { name: 'Notes', icon: 'sticky-note', route: '/notes/ToDoItem' },
  ];

  const handlePress = (tabName: string, route: string) => {
    setActiveTab(tabName);
    setTimeout(() => {
      router.push(route);
    }, 100);
  };

  return (
    <View className="flex-row justify-around items-center rounded py-4">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          className={`flex items-center px-4 ${
            activeTab === tab.name ? 'text-red-500' : 'text-black'
          }`}
          onPress={() => handlePress(tab.name, tab.route)}
        >
          <Icon
            name={tab.icon}
            size={24}
            color={activeTab === tab.name ? 'red' : iconColor} // Setează culoarea iconiței
          />
          <Text className={`${activeTab === tab.name ? 'text-red-500' : iconColor === 'white' ? 'text-white' : 'text-black'}`}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNavBar;
