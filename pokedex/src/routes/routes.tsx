import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "screens/Home";
import { Details } from "screens/Details";
import { NativeBaseProvider } from "native-base";

const { Navigator, Screen } = createNativeStackNavigator();

function MyStack() {

  

  return (
    <NativeBaseProvider>
      <Navigator>
        <Screen
         options={{ title: "", headerShown: false,  }}
         name="home"
         component={Home} />
        <Screen
          options={{ title: "", headerShown: false }}
          name="details"
          component={Details} />
      </Navigator>
    </NativeBaseProvider>
  );
}

export default MyStack;