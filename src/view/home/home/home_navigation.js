
import React from 'react';
import HomeView from '../_homepartial/home/home_view';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import useGlobalStyles from '../../../core/app/style/app_styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
useGlobalStyles
const HomeNavigation = () => {
    const mystyles = useGlobalStyles();
    return (
        <View style={[mystyles.container]}>
            <Tab.Navigator
                initialRouteName="Home"

                tabBarOptions={{
                    style: {
                        borderTopWidth: 0,
                        alignSelf: 'center',
                        width: '90%',
                        backgroundColor: useTheme().colors.card,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        marginBottom: 0,
                        justifyContent: 'center'

                    },
                    labelPosition: 'beside-icon',
                    showLabel: false,
                    activeTintColor: useTheme().colors.border,
                }}>
                    <Tab.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons style={{ justifyContent: 'space-evenly', }} name="home" color={color} size={size} />
                        ),
                    }}
                    name="Home"
                    component={HomeView} />

                    <Tab.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons style={{ justifyContent: 'space-evenly', }} name="search" color={color} size={size} />
                        ),
                    }}
                    name="Search"
                    component={HomeView} />

                    <Tab.Screen
                    options={{                     
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons style={{ justifyContent: 'space-evenly', }} name="navigate-circle-outline" color={color} size={size} />
                        ),
                    }}
                    name="Home2"
                    component={HomeView} />

                    <Tab.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons style={{ justifyContent: 'space-evenly', }} name="heart-outline" color={color} size={size} />
                        ),
                    }}
                    name="Home3"
                    component={HomeView} />
                
            </Tab.Navigator>
        </View>
    );
}


export default HomeNavigation;



