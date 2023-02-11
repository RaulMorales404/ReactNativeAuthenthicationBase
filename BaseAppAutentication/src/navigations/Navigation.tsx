import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import Home from '../screens/Home';
import Login from '../screens/Login';

import Register from '../screens/Register';
import LoginScreen from '../screens/loginScreen';

const configHeader = {
    headerShown: false, cardStyle: { backgroundColor: 'white' }
}
const Stack = createStackNavigator();

const Navigation = () => {
    const { status } = useContext(AuthContext);

    if (status === 'checking') return <LoginScreen />
    
    return (
        <Stack.Navigator
            screenOptions={{ ...configHeader }}>
            {
                status === 'authenticated'
                    ? (
                        <Stack.Screen name="Home" component={Home} />
                    )
                    : (
                        <>
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="Register" component={Register} />
                        </>
                    )

            }

        </Stack.Navigator>
    );
}


export default Navigation