import * as React from 'react';
import { Button, View,useWindowDimensions,Text  } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem  } from '@react-navigation/drawer';
import { NavigationContainer,Screen } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mycard from './components/MyCard'
import Nav from './components/ButtonNav'
import AddCard from './components/AddCard'
import Login from './components/Login'
import AddCONECTion from './components/Addconection'
import ViewCon from './components/viewConnection'
import Home from './components/Home'
import Profile from './components/profile'
import Complain from './components/complaint'
import BillCalc from './components/BillCaluculator'
import Inturuption from './components/Inturuption'
import MakePAY from './components/makePayment'
import UpdateCon from './components/updateConnection'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label={() => <Text style={{ color: 'blue' }}>Logout</Text>}
        style={{backgroundColor: 'red'}} 
        onPress={() => alert('Logged out')}
      />
    </DrawerContentScrollView>
  );
}
export default function App() {
  const dimension =useWindowDimensions();
  const drawerType=dimension.width >=700 ? 'permanent':'front';
  return (
   
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"   
      screenOptions={{
    drawerStyle: {
      backgroundColor: '#c6cbef',
      width: 240,
    },
  }}
      
      drawerType={drawerType}
      edgeWidth={100}
      

      
      >
        <Drawer.Screen name="Home" component={Home}  options={{ 
          drawerActiveTintColor: 'blue',
          drawerActiveBackgroundColor:'grey',
          
           drawerIcon:({ color ,size})=>(

             <Feather name="home" color={color } size={size}/>
          ),
          labelStyle:{fontWeight:'bold'}
           }
         
           
          }
           />


           <Drawer.Screen name="MY CARDS" component={Mycard}  options={{ 
          drawerActiveTintColor: 'blue',
          drawerActiveBackgroundColor:'grey',
          
           drawerIcon:({ color ,size})=>(

             <Feather name="credit-card" color={color } size={size}/>
          ),
          labelStyle:{fontWeight:'bold'}
           }
         
           
          }
           />

              <Drawer.Screen name="profile" component={Profile}  options={{ 
          drawerActiveTintColor: 'blue',
          drawerActiveBackgroundColor:'grey',
          
           drawerIcon:({ color ,size})=>(

             <Feather name="user" color={color } size={size}/>
          ),
          labelStyle:{fontWeight:'bold'}
           }
         
           
          }
           />


<Drawer.Screen name="make complaint" component={Complain}  options={{ 
          drawerActiveTintColor: 'blue',
          drawerActiveBackgroundColor:'grey',
          
           drawerIcon:({ color ,size})=>(

             <Feather name="alert-octagon" color={color } size={size}/>
          ),
          labelStyle:{fontWeight:'bold'}
           }
         
           
          }
           />


           <Drawer.Screen name="Bill Calculation" component={BillCalc}  options={{ 
          drawerActiveTintColor: 'blue',
          drawerActiveBackgroundColor:'grey',
          
           drawerIcon:({ color ,size})=>(

             <Feather name="divide-square" color={color } size={size}/>
          ),
          labelStyle:{fontWeight:'bold'}
           }
         
           
          }
           />


            <Drawer.Screen name="Intruption " component={Inturuption}  options={{ 
          drawerActiveTintColor: 'blue',
          drawerActiveBackgroundColor:'grey',
          
           drawerIcon:({ color ,size})=>(

             <Feather name="calendar" color={color } size={size}/>
          ),
          labelStyle:{fontWeight:'bold'}
           }
         
           
          }
           />


            <Drawer.Screen name="Make payment " component={MakePAY}  options={{ 
          drawerActiveTintColor: 'blue',
          drawerActiveBackgroundColor:'grey',
          
           drawerIcon:({ color ,size})=>(

             <Feather name="dollar-sign" color={color } size={size}/>
          ),
          labelStyle:{fontWeight:'bold'}
           }
         
           
          }
           />

        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
         <Drawer.Screen name="Nav" component={Nav}  />
          <Drawer.Screen name="Login" component={Login}  />
          <Drawer.Screen name="MY CONECTION" component={ViewCon}  />
          <Drawer.Screen name="Addconection" component={AddCONECTion}  />
           <Drawer.Screen name="Addcard" component={AddCard}  />
            <Drawer.Screen name="Update Connection" component={UpdateCon}  />
      </Drawer.Navigator>

        
        
  
    </NavigationContainer>


        
  );
}
