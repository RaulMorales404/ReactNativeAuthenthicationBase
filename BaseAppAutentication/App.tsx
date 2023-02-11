import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigations/Navigation';
import { ProviderAuth } from './src/context/AuthContext';


const AppState = ({ children }: any) => {
    return <ProviderAuth>
        {children}
    </ProviderAuth>
}

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <Navigation />
            </AppState>
        </NavigationContainer>
    )
}

export default App;