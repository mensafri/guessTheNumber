import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		marginTop: 40,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		elevation: 20,
		shadowColor: "black",
		shadowOffset: { width: 4, height: 4 },
		shadowRadius: 6,
		shadowOpacity: 0.5,
	},
});
