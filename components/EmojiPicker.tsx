import { StyleSheet, Modal, View, Text, Pressable } from "react-native";
import { PropsWithChildren } from "react";
import MaterialsIcons from "@expo/vector-icons/MaterialIcons";

type Props = PropsWithChildren<{ 
    isVisible: boolean;
    onClose: () => void;
}>
export default function EmojiPicker({isVisible, children, onClose} : Props) {
    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTitleContainer}>
                        <Text style={styles.modalTitleText}>Select an Emoji</Text>
                        <MaterialsIcons name="close" size={24} color="#000000" onPress={onClose} />
                    </View>
                    <View style={styles.contentContainer}>{children}</View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    modalTitleContainer: {
        height: '16%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalTitleText: {
        color: "#fff",
        fontSize: 16,
    },
    contentContainer: {
        flex: 1,
    },
})