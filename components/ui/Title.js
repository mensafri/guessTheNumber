import { Platform, StyleSheet, Text } from "react-native";

export default function Title({ children }) {
	const iphone = <Text>Cie HPnya Iphone</Text>;
	return (
		<Text style={styles.title}>
			{children}
			{Platform.OS === "ios" ? iphone : null}
		</Text>
	);
}
const styles = StyleSheet.create({
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 28,
		color: "white",
		textAlign: "center",
		// borderWidth: Platform.OS === "android" ? 2 : 0,
		// borderWidth: Platform.select({ ios: 2, android: 0 }),
		borderWidth: 2,
		borderColor: "white",
		padding: 12,
		maxWidth: "80%",
		width: 300,
	},
});
