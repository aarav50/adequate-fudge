import React  from "react";
import {createBottomTabNavigator} from "react-navigation/bootom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import feed from "../screens/feed";
import createpost from "../screens/createpost";
const Tab = createBottomTabNavigator();
export default function App() {
return (

<Tab.Navigator
screenOptions={({ route }) => ({
tabBarIcon: ({ focused, color, size }) => {
let iconName;
if (route.name === 'feed') {
iconName = focused
? 'book'
: 'book-outline';
} else if (route.name === 'CreateStory') {
iconName = focused ? 'create' : 'create-outline';
}
return <Ionicons name={iconName} size={size} color={color} />;
},
})}
tabBarOptions={{
activeTintColor: 'tomato',
inactiveTintColor: 'gray',
}}
>

<Tab.Screen name="feed" component={feed} />
<Tab.Screen name="createpost" component={createpost} />
</Tab.Navigator>
)}