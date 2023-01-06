import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MapScreen from "../screens/MapScreen";
import FilterScreen from "../screens/FilterScreen";
import Details from "../screens/Details";
import CityFilter from "../screens/CityFilter";
import SeriesFilter from "../screens/SeriesFilter";
import CategoryFilter from "../screens/CategoryFilter";
const Stack = createStackNavigator();
const ScreenOptionStyle = {
    headerShown: true,
};
const HomeStackNavigator = () =>{
    return (
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Nearby" component={MapScreen}/>
            <Stack.Screen name="FilterScreen" component={FilterScreen}/>
            <Stack.Screen name="Details" component={Details}/>
            <Stack.Screen name="CityFilter" component={CityFilter}/>
            <Stack.Screen name="SeriesFilter" component={SeriesFilter}/>
            <Stack.Screen name="CategoryFilter" component={CategoryFilter}/>
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;