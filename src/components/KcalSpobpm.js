import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const KcalSpobpm = ({ chartData }) => {
	const [spo2, setSpo2] = useState(98);
	const calGoal = 2000;
	const fixedCalGoal = calGoal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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
					justifyContent: "space-between",
					paddingHorizontal: 10,
					paddingVertical: 20,
				}}
			>
				<FontAwesome5 name="fire" size={24} color="#FF7B79" />
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Text style={{ fontSize: 24, fontWeight: 600 }}>1800</Text>
					<Text style={{ fontSize: 14, marginTop: 10, fontWeight: 600 }}>
						/{fixedCalGoal} cal
					</Text>
				</View>
			</View>
			<View
				style={{
					borderLeftWidth: 1,
					borderRightWidth: 1,
					borderColor: "#0000001A",
					alignItems: "center",
					justifyContent: "space-between",
					paddingHorizontal: 10,
					paddingVertical: 20,
				}}
			>
				<Text style={{ color: "#00cc94", fontSize: 18, fontWeight: 600 }}>
					spO2
				</Text>
				<Text style={{ fontSize: 26, fontWeight: 500 }}>%{spo2}</Text>
			</View>
			<View
				style={{
					justifyContent: "space-between",
					alignItems: "center",
					paddingHorizontal: 10,
					paddingVertical: 20,
				}}
			>
				<AntDesign name="heart" size={24} color="red" />
				<Text
					style={{
						fontSize: 26,
						fontWeight: 500,
					}}
				>
					{chartData.datasets[0].data[chartData.datasets[0].data.length - 1]}
					bbpm
				</Text>
			</View>
		</View>
	);
};

export default KcalSpobpm;

const styles = StyleSheet.create({});
