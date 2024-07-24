import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary, // Active tab color
        
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: 'Meditate',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
                name="flower-tulip"     
                size={size} 
                color={color} />
          ),
        }}
      />

<Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: 'affirmation',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="open-book" size={24} color="black" />
          ),
        }}
      />
      {/* Add more Tabs.Screen as needed */}
    </Tabs>
  )
}

export default TabsLayout