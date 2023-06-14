import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeartRateChart from "../components/HeartRateChart";
import StepCounter from "../components/StepCounter";
import KcalSpobpm from "../components/KcalSpobpm";
import { useState } from "react";
import { useEffect } from "react";
import BurpeeAndHeat from "../components/BurpeeAndHeat";
import { auth, setChat, db } from "../firebase";
import {
	onSnapshot,
	collection,
	orderBy,
	query,
	collectionGroup,
	doc,
	setDoc,
} from "firebase/firestore";

const HomeScreen = () => {
	const [chartData, setChartData] = useState({
		labels: [],
		datasets: [
			{
				data: [0],
				color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
			},
		],
	});
	const [messages, setMessages] = useState();

	let itemRef = collection(db, "data");

	useEffect(
		() =>
			onSnapshot(itemRef, (docsSnap) => {
				docsSnap.forEach((doc) => {
					setMessages(doc.data());
					console.log("gir");
				});
			}),

		[]
	);

	useEffect(() => {
		const interval = setInterval(() => {
			const randomNumber = Math.floor(Math.random() * 6);
			const heartRates = [70, 72, 74, 76, 78, 80];
			const newDataPoint = heartRates[randomNumber]; // Generate a random data point between 60 and 120 (inclusive)

			setChartData((prevData) => {
				const labels = [
					...prevData.labels,
					(prevData.labels.length + 1).toString(),
				].slice(-10);
				const datasets = [
					{
						data: [...prevData.datasets[0].data, newDataPoint].slice(-10),
						color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
					},
				];

				return { labels, datasets };
			});
		}, 800); // Add data point every second

		return () => {
			clearInterval(interval); // Clean up the interval on component unmount
		};
	}, []);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<HeartRateChart chartData={chartData} />
			<StepCounter steps={messages?.steps} />
			<KcalSpobpm chartData={chartData} />
			<BurpeeAndHeat
				burpee={messages?.burpee}
				temp={messages?.temp.toFixed(1)}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
