import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Label } from "@react-navigation/elements";

type Props = {
    label: string;
    theme?: string;
    onPress?: () => void;
}

export default function Button({ label, theme, onPress }: Props) {
    if (theme == 'primary') {
        return (
            <View style={[styles.buttonContainer, styles.primary]}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome name="picture-o" size={18} style={[styles.buttonIcon, styles.primary]} />
                    <Text style={[styles.buttonText, styles.primary]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    else {
        return (
            <View style={[styles.buttonContainer]}>
                <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>{label}</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    primary: {
        borderRadius: 18,
        backgroundColor: '#fff',
        color: '#000000',
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    }
})