import React, { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, Text, View } from "react-native";

const HeartRateChart = ({ chartData }) => {
	const chartConfig = {
		backgroundGradientFrom: "#ffffff",
		backgroundGradientTo: "#ffffff",
		color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
		strokeWidth: 2,
		decimalPlaces: 0,
	};

	const renderDotContent = ({ x, y, index, value }) => {
		// Display dot only on the latest data point
		if (chartData.labels.length > 9) {
			if (index === chartData.labels.length - 1) {
				return (
					<View
						key={index}
						style={{ position: "absolute", left: x - 20, top: y - 15 }}
					>
						<View
							style={{
								backgroundColor: "red",
								borderRadius: 50,
								width: 40,
								height: 40,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text style={{ color: "#ffffff", textAlign: "center" }}>
								{
									chartData.datasets[0].data[
										chartData.datasets[0].data.length - 1
									]
								}
							</Text>
						</View>
					</View>
				);
			}
		} else {
			if (index === chartData.labels.length) {
				return (
					<View
						key={index}
						style={{ position: "absolute", left: x - 20, top: y - 15 }}
					>
						<View
							style={{
								backgroundColor: "red",
								borderRadius: 50,
								width: 40,
								height: 40,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text style={{ color: "#ffffff", textAlign: "center" }}>
								{
									chartData.datasets[0].data[
										chartData.datasets[0].data.length - 1
									]
								}
							</Text>
						</View>
					</View>
				);
			}
		}

		return null;
	};

	return (
		<>
			<LineChart
				data={chartData}
				width={Dimensions.get("window").width}
				height={220}
				chartConfig={chartConfig}
				bezier
				withInnerLines={false}
				withVerticalLabels={false}
				renderDotContent={renderDotContent} // Custom render function for dot content
			/>
		</>
	);
};

export default HeartRateChart;
