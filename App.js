import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import Foods from './components/Foods';
import Routines from './components/Routines';
import RoutineEdit from './components/RoutineEdit';
import RoutineForm from './components/RoutineForm';
import Routine from './components/Routine';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

function App() {
  const homeStack = () => {
    return(
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    )
  }
  const routineStack = () => {
    return(
    <Stack.Navigator theme={theme} initialRouteName='Routines'>
      <Stack.Screen name='Routines' component={Routines}/>
      <Stack.Screen name='Create Routine' component={RoutineForm}/>
      <Stack.Screen name="Edit" component={RoutineEdit}/>
      <Stack.Screen name="Details" component={Routine}/>
    </Stack.Navigator>
    )
  }
  const foodStack = () => {
    return(
      <Stack.Navigator theme={theme} initialRouteName='Foods'>
        <Stack.Screen name="Foods" component={Foods}/>
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' children={homeStack}/>
        <Drawer.Screen name='My Routines' children={routineStack}/>
        <Drawer.Screen name='My Foods' children={foodStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const theme = {
  borders: {
    width: 2,
    color: 'white'
  }, 
  colors: {
    text: 'white',
    border: 'white',
    background: 'black',
    notification: 'black'
  }
}

export default App