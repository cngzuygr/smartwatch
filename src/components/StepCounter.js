import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Animated,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const StepCounter = (props) => {
	const steps = props.steps;
	const stepGoal = 10000;
	const [isAtGoal, setIsAtGoal] = useState(false);
	const [pulseAnimation] = useState(new Animated.Value(0));

	useEffect(() => {
		if (steps >= stepGoal && !isAtGoal) {
			setIsAtGoal(true);
			startPulseAnimation();
		} else if (steps < stepGoal && isAtGoal) {
			setIsAtGoal(false);
			stopPulseAnimation();
		}
	}, [steps]);

	const startPulseAnimation = () => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(pulseAnimation, {
					toValue: 1,
					duration: 500,
					useNativeDriver: false,
				}),
				Animated.timing(pulseAnimation, {
					toValue: 0,
					duration: 500,
					useNativeDriver: false,
				}),
			]),
			{ iterations: -1 }
		).start();
	};

	const stopPulseAnimation = () => {
		pulseAnimation.setValue(0);
	};

	const pulseColor = pulseAnimation.interpolate({
		inputRange: [0, 1],
		outputRange: ["#0094FF", "#FF0000"],
	});

	const percentage =
		steps >= stepGoal ? 100 : Math.floor((steps / stepGoal) * 100);

	return (
		<View
			style={{
				width: "90%",
				backgroundColor: "white",
				borderRadius: 30,
				alignSelf: "center",
				padding: 20,
				marginTop: 20,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View
					style={{
						width: 50,
						height: 50,
						justifyContent: "center",
						alignItems: "center",
						transform: [{ rotate: "240deg" }],
					}}
				>
					<FontAwesome5 name="shoe-prints" size={32} color="#0094FF" />
				</View>
				<TouchableOpacity>
					<Text style={{ fontSize: 14, fontWeight: 600, color: "#0094FF" }}>
						Haftalık çizelge
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Text style={{ fontSize: 24, fontWeight: 600 }}>{steps} </Text>
					<Text style={{ fontSize: 14, marginTop: 10, fontWeight: 600 }}>
						/{stepGoal}
					</Text>
				</View>
				<View style={{ marginRight: 25 }}>
					{isAtGoal ? (
						<Animated.Text
							style={[styles.percentageText, { color: pulseColor }]}
						>
							{percentage}%
						</Animated.Text>
					) : (
						<Text style={styles.percentageText}>{percentage}%</Text>
					)}
				</View>
			</View>
		</View>
	);
};

export default StepCounter;

const styles = StyleSheet.create({
	percentageText: {
		fontSize: 24,
		fontWeight: 600,
	},
});
``;
