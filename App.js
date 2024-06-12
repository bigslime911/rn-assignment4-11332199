import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/HomeScreen";
import LoginIn from "./src/LoginScreen";



const Stack = createNativeStackNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={LoginIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;


