import React from "react";
import { View, Text } from 'react-native';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import SectionScreen from "./screens/SectionScreen";
import CoursesScreen from "./screens/CoursesScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import { Ionicons } from "@expo/vector-icons";

const initialState = {
  action: "",
  name: ""
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case "OPEN_MENU": 
      return { action: "openMenu"};
    case "CLOSE_MENU":
      return { action: "closeMenu" };
      case "UPDATE_NAME":
        return { name: action.name };
    default:
      return state;
  }
};

const store = configureStore({ reducer });

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Section') {
          iconName = focused ? 'play-circle' : 'play-circle-outline';
        } else if (route.name === 'Project') {
          iconName = focused ? 'md-folder-open' : 'md-folder-open-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Section" component={SectionScreen} />
    </Tab.Navigator>
  );
}

function Section() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SectionScreen />
    </View>
  );
}

function Courses() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CoursesScreen />
    </View>
  );
}

function Projects() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProjectsScreen />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        } else if (route.name === 'Section') {
          iconName = focused ? 'play-circle' : 'play-circle-outline';
        } else if (route.name === 'Project') {
          iconName = focused ? 'md-folder-open' : 'md-folder-open-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

const App = () => (
  <Provider store={store}>
    <NavigationContainer>    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
)

export default App;