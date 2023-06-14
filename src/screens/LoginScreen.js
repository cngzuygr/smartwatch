import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import DatePicker from "react-native-datepicker";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("İsim boş geçilemez"),
	weight: Yup.number().required("Kilo boş geçilemez"),
	height: Yup.number().required("Boy boş geçilemez"),
	birthdate: Yup.date().required("Doğum tarihi boş geçilemez"),
});

const LoginScreen = ({ navigation }) => {
	const handleSubmit = (values) => {
		navigation.navigate("App");
	};

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					position: "relative",
					justifyContent: "center",
					alignItems: "center",
					marginTop: 20,
				}}
			>
				<TouchableOpacity
					style={{ position: "absolute", left: 0, padding: 10 }}
					onPress={() => navigation.goBack()}
				>
					<Ionicons
						style={{ alignSelf: "flex-start" }}
						name="arrow-back"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
				<View style={styles.centerContainer}>
					<Text style={{ fontSize: 18, fontWeight: 700, alignSelf: "center" }}>
						Kayıt Ol
					</Text>
				</View>
			</View>
			<View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
				<Formik
					initialValues={{ name: "", weight: "", height: "", birthdate: "" }}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors }) => (
						<View
							style={{
								width: "100%",
								alignItems: "center",
							}}
						>
							<TextInput
								style={styles.input}
								placeholder="İsim"
								onChangeText={handleChange("name")}
								onBlur={handleBlur("name")}
								value={values.name}
							/>
							{errors.name && <Text style={styles.error}>{errors.name}</Text>}

							<TextInput
								style={styles.input}
								placeholder="Kilo"
								onChangeText={handleChange("weight")}
								onBlur={handleBlur("weight")}
								value={values.weight}
								keyboardType="number-pad"
							/>
							{errors.weight && (
								<Text style={styles.error}>{errors.weight}</Text>
							)}

							<TextInput
								style={styles.input}
								placeholder="Boy (cm.)"
								onChangeText={handleChange("height")}
								onBlur={handleBlur("height")}
								value={values.height}
							/>
							{errors.height && (
								<Text style={styles.error}>{errors.height}</Text>
							)}

							<DatePicker
								style={styles.dateInput}
								date={values.birthdate}
								mode="date"
								placeholder="Doğum tarihi"
								format="DD-MM-YYYY"
								minDate="01-01-1900"
								maxDate={new Date()}
								confirmBtnText="Confirm"
								cancelBtnText="Cancel"
								customStyles={{
									dateInput: {
										borderWidth: 0,
									},
									placeholderText: {
										color: "gray",
									},
								}}
								onDateChange={(date) => handleChange("birthdate")(date)}
							/>
							{errors.birthdate && (
								<Text style={styles.error}>{errors.birthdate}</Text>
							)}
							<TouchableOpacity style={styles.button} onPress={handleSubmit}>
								<Text style={styles.buttonText}>Devam et</Text>
							</TouchableOpacity>
						</View>
					)}
				</Formik>
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	input: {
		width: "90%",
		padding: 20,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	dateInput: {
		width: "90%",
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 0,
		padding: 10,
	},
	error: {
		color: "red",
		marginBottom: 10,
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
