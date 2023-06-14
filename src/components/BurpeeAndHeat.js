import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const BurpeeAndHeat = (props) => {
	const burpee = props.burpee;
	const temp = props.temp;

	return (
		<View
			style={{
				width: "90%",
				backgroundColor: "white",
				borderRadius: 30,
				alignSelf: "center",
				flexDirection: "row",
				marginTop: 20,
			}}
		>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					paddingHorizontal: 10,
					paddingVertical: 30,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image
					source={require("../../assets/icons/burpee.png")}
					style={{ width: 40, height: 40 }}
				/>
				<View
					style={{
						alignItems: "center",
						justifyContent: "space-between",
						flex: 1,
					}}
				>
					<Text style={{ fontSize: 14, fontWeight: 600 }}>Burpee Sayacı</Text>
					<Text style={{ fontSize: 24, fontWeight: 600, marginTop: 10 }}>
						{burpee}
					</Text>
				</View>
			</View>
			<View
				style={{
					flex: 1,
					borderLeftWidth: 1,
					borderColor: "#0000001A",
					flexDirection: "row",
					paddingHorizontal: 10,
					paddingVertical: 30,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<FontAwesome name="thermometer" size={36} color="red" />
				<View
					style={{
						alignItems: "center",
						justifyContent: "space-between",
						flex: 1,
					}}
				>
					<Text style={{ fontSize: 14, fontWeight: 600 }}>Sıcaklık</Text>
					<Text style={{ fontSize: 24, fontWeight: 600, marginTop: 10 }}>
						{temp}°C
					</Text>
				</View>
			</View>
		</View>
	);
};

export default BurpeeAndHeat;

const styles = StyleSheet.create({});
