import * as React from 'react';
import { Button, View, Modal, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Drawer_Screen_1 ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Drawer_Screen_2')}
        title="Go to Drawer_Screen_2"
      />
    </View>
  );
}

function Drawer_Screen_2 ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Drawer_Screen_3')}
        title="Go to Drawer_Screen_3"
      />
    </View>
  );
}

function Drawer_Screen_3 ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Stack_Root')}
        title="Go to Stack_Root"
      />
    </View>
  );
}

function Stack_Screen_1 ({ navigation }) {
  return (
    <Modal isVisible = {true} style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'black', flex: 1, opacity: 1, padding: 50 }}>
        <View style={{ backgroundColor: 'white', flex: 1, opacity: 1 }}>
        <Text>Go to Stack_Screen_2</Text>

        </View>
      </View>       
    </Modal>
  );
}

function Stack_Screen_2 ({ navigation }) {
  return (
    <Modal isVisible = {true} style={{ flex: 1, backgroundColor: 'black', width: 200, height: 200 }}>
      <View style={{ backgroundColor: 'red' }}>
        <Button
          // onPress={() => navigation.navigate('Stack_Screen_1')}
          title="Go to Stack_Screen_1"
        />
      </View>       
    </Modal>
  );
}

const StackRootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="Stack_Screen_1" component={Stack_Screen_1} />
      <Stack.Screen name="Stack_Screen_2" component={Stack_Screen_2} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Drawer_Screen_1' component={Drawer_Screen_1}></Drawer.Screen>
        <Drawer.Screen name='Drawer_Screen_2' component={Drawer_Screen_2}></Drawer.Screen>
        <Drawer.Screen name='Drawer_Screen_3' component={Drawer_Screen_3}></Drawer.Screen>
        <Drawer.Screen name="Stack_Root" component={StackRootNavigator}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
