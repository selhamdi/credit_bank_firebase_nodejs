import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SignUpScreen from "./screens/SignUpScreen";
// import CreditCalcul from "./screens/CreditCalcul";
// import validateCoord from "./screens/validateCoord";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-native-paper'
import { theme } from './core/theme'
import Credit from './screens/Credit'
import PageValidation from './screens/pageValidation'
const Stack = createStackNavigator()
function App() {
  return (

    <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUpScreen"
        screenOptions={{
          headerShown: false,
        }}
      >


        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: "Inscription",
            headerTintColor: "#ed3b45",
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        /> 
           <Stack.Screen
          name="Credit"
          component={Credit}
          options={{
            title: "Credit",
            headerTintColor: "#ed3b45",
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        /> 
           <Stack.Screen
          name="PageValidation"
          component={PageValidation}
          options={{
            title: "Credit",
            headerTintColor: "#ed3b45",
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        /> 
         {/* <Stack.Screen
          name="Credit"
          component={Credit}
          options={{
            title: "Credit",
            headerTintColor: "white",
            headerStyle: {
              : "skyblue",
            },
          }}
        />  */}
        {/* <Stack.Screen
          name="Validation"
          component={validateCoord}
          options={{
            title: "Validation",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "skyblue",
            },
          }}
        /> */}
     
                {/* <Stack.Screen name="Credit" component={Credit} /> */}
                {/* <Stack.Screen name="PageValidation" component={PageValidation} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  </Provider>

  );
}

export default App;
