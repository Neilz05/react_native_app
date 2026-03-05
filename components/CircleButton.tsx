import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
    onPress?: () => void;
}

export default function CircleButton({onPress} : Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginHorizontal: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 24,
    }
})