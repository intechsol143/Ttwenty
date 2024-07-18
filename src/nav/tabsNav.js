import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octions from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Foundation from 'react-native-vector-icons/Foundation'
import More from '../screens/tabs/more/more';
import Dashboard from '../screens/tabs/dashboard/dashboard';
import Media from '../screens/tabs/media/media';
import Watch from '../screens/tabs/watch/watch';
import { fontsStyle } from '../contants/fontsColors';

const Tab = createBottomTabNavigator();

export default function TabsNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: fontsStyle.WHITE,
                tabBarInactiveTintColor: fontsStyle.GREY,

                tabBarStyle: {
                    backgroundColor:fontsStyle.PRIMARY_COLOR,
                    paddingBottom: 5,
                    paddingTop: 5,
                    height: 60,
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderRadius: 20,
                    overflow: 'hidden', 
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Dash') {
                        iconName = focused ? 'dashboard' : 'dashboard';
                    } else if (route.name === 'More') {
                        return <Foundation name={"indent-more"} size={size} color={color} />;

                    }
                    else if (route.name === 'Media') {
                        return <Entypo name={"folder-images"} size={size} color={color} />;
                    }
                    
                    else if (route.name === 'Watch') {
                        return <Octions name={"video"} size={size} color={color} />;
                    }
                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
            })}

        >
            <Tab.Screen name="Dash" component={Dashboard} />
            <Tab.Screen name="Watch" component={Watch} />
            
            <Tab.Screen name="Media" component={Media} />
            <Tab.Screen name="More" component={More} />
          

        </Tab.Navigator>
    );
}
