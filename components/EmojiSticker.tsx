import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type Props = {
    stickerSource: ImageSourcePropType;
    imageSize: number;
}

export default function EmojiSticker({imageSize, stickerSource} : Props) {
    const translateY = useSharedValue(0);
    const translateX = useSharedValue(0);
    const scaleImage = useSharedValue(imageSize);
    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2)  {
                scaleImage.value = scaleImage.value * 2;
            }
            else {
                scaleImage.value = Math.round(scaleImage.value / 2);
            }
        });
    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height : withSpring(scaleImage.value),
        }
    });

    const drag = Gesture.Pan().onChange(event => {
        translateX.value = event.translationX;
        translateY.value = event.translationY;
    })

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
            {
                translateX: translateX.value,
            },
            {
                translateY: translateY.value,
            }
        ]
        }
    });
    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[{top:-300}, containerStyle]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image
                        source={stickerSource}
                        resizeMode="contain"
                        style={[imageStyle, {width: imageSize, height: imageSize}]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    )
}