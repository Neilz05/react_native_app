import {StyleSheet, Text, View, Pressable} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
    label: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress?: () => void;
}

export default function IconButton({ label, icon, onPress } : Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <MaterialIcons name={icon} size={24} color="#fff" />
                <Text style={styles.buttonText}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        // backgroundColor: '#000000',
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
        color: '#fff',
        fontSize: 12,
    }
})
