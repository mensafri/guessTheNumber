import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
	roundsNumber,
	userNumber,
	onStartNewGame,
}) {
	return (
		<View style={styles.rootContainer}>
			<Title>Game Over!</Title>
			<View style={styles.imageContainer}>
				<Image
					source={require("../assets/images/success.png")}
					style={styles.image}
				/>
			</View>
			<Text style={styles.summaryText}>
				Aplikasi hanya melakukan{" "}
				<Text style={styles.highligth}>{roundsNumber}</Text> kali percobaan
				untuk menebak angka <Text style={styles.highligth}>{userNumber}</Text>
			</Text>
			<PrimaryButton onPress={onStartNewGame}>Mulai Game Baru</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		borderRadius: 150,
		width: 300,
		height: 300,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: "hidden",
		margin: 36,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 24,
		textAlign: "center",
		marginBottom: 24,
	},
	highligth: {
		fontFamily: "open-sans-bold",
		color: Colors.primary500,
	},
});
