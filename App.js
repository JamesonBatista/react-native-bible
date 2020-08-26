import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/Home/HomeScreen';
import CreateHistory from './src/CreateHistory/index';
import FlatList from './src/FlatList';
import StoriePerson from './src/StoriePerson/index';
import StorieGroup from './src/StorieGroup/index';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Olá Jam Batista',
            headerStyle: {
              backgroundColor: '#343434',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="History"
          component={CreateHistory}
          options={{
            title: 'Criar História',
            headerStyle: {
              backgroundColor: '#343434',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="FlatList" component={FlatList} />
        <Stack.Screen name="Person" component={StoriePerson} />
        <Stack.Screen name="Group" component={StorieGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
