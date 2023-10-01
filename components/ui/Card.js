import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}

const dimensionWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		marginTop: dimensionWidth < 380 ? 18 : 36,
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
