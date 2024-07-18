import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './tabsNav';
import WatchDetails from '../screens/tabs/watch/subscreens/watchdetails';
export default function Index() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Tabs" component={TabsNav} />
                <Stack.Screen name="WatchDetails" component={WatchDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}