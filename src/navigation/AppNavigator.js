import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens";

const AppNav = createNativeStackNavigator();

export default function AppNavigator() {
	return (
		<AppNav.Navigator screenOptions={{ headerShown: false }}>
			<AppNav.Screen name="HomeScreen" component={HomeScreen} />
		</AppNav.Navigator>
	);
}
