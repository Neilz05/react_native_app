import {View, Text, StyleSheet} from "react-native";
import {Link, Stack} from "expo-router";

// This is used when the user visits a non-existent route. You can link this to any route, like a '404' page.
export default function NotFoundPage() {
    return (
        <>
            <Stack.Screen options={{ headerTitle: "Not Found" }} />
            <View style={styles.container}>
                <Text style={styles.text}>404 - Not Found</Text>
                <Link href="/" style={styles.link}>
                    Go back to Home
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 20,
    },
    link: {
        color: '#61dafb',
        fontSize: 18,
    }
})