import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Login from './../screens/Login/Login';
import SignUp from './../screens/SignUp/SignUp';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return(
        <Stack.Navigator
        screenOptions={{header: () => null, headerShown: false}}
         initialRouteName={Routes.Login}>
            <Stack.Screen name={Routes.Login} component={Login}/>
            <Stack.Screen name={Routes.SignUp} component={SignUp}/>
            
        </Stack.Navigator>
    );
};

export default MainNavigation;