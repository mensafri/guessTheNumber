import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
	roundsNumber,
	userNumber,
	onStartNewGame,
}) {
	const { width, height } = useWindowDimensions();

	let imageSize = 300;

	if (width < 380) {
		imageSize = 150;
	}

	if (height < 480) {
		imageSize = 80;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};

	return (
		<ScrollView style={styles.screen}>
			<View style={styles.rootContainer}>
				<Title>Game Over!</Title>
				<View style={[styles.imageContainer, imageStyle]}>
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
		</ScrollView>
	);
}

// const dimensionWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		// width: dimensionWidth < 380 ? 150 : 300,
		// height: dimensionWidth < 380 ? 150 : 300,
		// borderRadius: dimensionWidth < 380 ? 75 : 150,
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
