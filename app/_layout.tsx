import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
// Tabs 
import Home from './index';
import Search from '../components/Search'
import Compare from './Compare';

// Stack Screen
import Both from './Both';
import List from './List';
import Model from './Model';
import Variant from './Variant';
import MoreCar from '../components/AllModels'
import Details from '../components/Details'

// Welcome 
import Welcome from '../components/WelcomeScreen'

// DA Tab Navigator
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#ECAE36',
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30
        },
        headerTintColor: '#fff',

        tabBarActiveTintColor: '#ECAE36',
        tabBarInactiveTintColor: '#000',
        

        // DA Icon for each tab ()
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Compare') {
            iconName = focused ? 'car-sport' : 'car-sport-outline';
          }
            else if (route.name === 'Search'){
              iconName = focused ? 'search' : 'search-outline';
            }

          // basta maoy mo return sa name,size,color na gi kuans taas AHHAHAA
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        //DA TABS!
      })}>
      <Tab.Screen name="Home" component={Home} options={{ title: "HOME"  }} />
      <Tab.Screen name="Compare" component={Compare} options={{ title: 'Compare Car' }} />
      <Tab.Screen name="Search" component={Search} options={{ title: 'Search' }} />
    </Tab.Navigator>
  );
}

// DA Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Welcome'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ECAE36',
          },
          headerTintColor: '#fff',
        } }>
        {/*DA SCREEN!! */}
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Both" component={Both} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Model" component={Model} />
        <Stack.Screen name="Variant" component={Variant} />

        <Stack.Screen name="MoreCar" component={MoreCar} options={{title: 'Explore'}} />
        <Stack.Screen name="Details" component={Details} options={{title: 'Details'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

