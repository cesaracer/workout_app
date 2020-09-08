import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import RoutineForm from './components/RoutineForm';
import Routine from './components/Routine';
import RoutineEdit from './components/RoutineEdit';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create Routine" component={RoutineForm} />
        <Stack.Screen name="Details" component={Routine}/>
        <Stack.Screen name="Edit" component={RoutineEdit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App