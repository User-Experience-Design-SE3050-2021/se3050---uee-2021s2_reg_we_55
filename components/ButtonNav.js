import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer ,Screen} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCard from './AddCard'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}



function App1() {
  return (
  
        <Screen name="AddCards" component={AddCard} />
        
      
   
  );
}

export default App1;
