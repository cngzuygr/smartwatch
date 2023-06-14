import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={[styles.innerContainer, { justifyContent: "center" }]}>
				<MaterialCommunityIcons name="heart-pulse" size={256} color="black" />
				<Text style={styles.text}>Hoşgeldiniz</Text>
			</View>
			<View style={styles.innerContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("LoginScreen")}
				>
					<Text style={styles.buttonText}>Giriş Yap</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
	innerContainer: {
		flex: 1,
		width: "100%",
		alignItems: "center",
	},
	text: {
		fontSize: 25,
	},
	button: {
		width: "90%",
		paddingVertical: 20,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
		marginTop: 50,
	},
	buttonText: {
		fontSize: 14,
		color: "white",
	},
});
