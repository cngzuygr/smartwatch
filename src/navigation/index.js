import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="App"
		>
			<Stack.Screen name="Auth" component={AuthNavigator} />
			<Stack.Screen name="App" component={AppNavigator} />
		</Stack.Navigator>
	);
}
