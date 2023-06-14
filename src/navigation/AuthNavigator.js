import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, WelcomeScreen } from "../screens";

const AuthNav = createNativeStackNavigator();

export default function AuthNavigator() {
	return (
		<AuthNav.Navigator screenOptions={{ headerShown: false }}>
			<AuthNav.Screen name="WelcomeScreen" component={WelcomeScreen} />
			<AuthNav.Screen name="LoginScreen" component={LoginScreen} />
		</AuthNav.Navigator>
	);
}
