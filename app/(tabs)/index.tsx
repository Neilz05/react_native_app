import { Text, View, StyleSheet, ImageSourcePropType} from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ImageViewer from "@/components/ImageView";
import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceholderImage = require('@/assets/images/android-icon-monochrome.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }else{
      alert('You did not select any image.');
    }
  }

  const onSaveImageAsync = async () => {
    // TODO
  }
  return (
    <GestureHandlerRootView
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker stickerSource={pickedEmoji} imageSize={40} />}
      </View>
      {showAppOptions ? (
        <View style={styles.footerContainer2}>
          <IconButton label="Reset" icon="refresh" onPress={() => {
            setSelectedImage(undefined);
            setShowAppOptions(false);
          }} />
          <CircleButton onPress={() => {setShowAppOptions(false); setShowEmojiPicker(true);}} />
          <IconButton label="Save" icon="save-alt" onPress={onSaveImageAsync} />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a Photo" onPress={pickImageAsync}/>
          <Button label="Use this Photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={showEmojiPicker} onClose={() => setShowEmojiPicker(false)}>
        <EmojiList onSelect={setPickedEmoji} onClose={() =>setShowEmojiPicker(false)}/>
      </EmojiPicker>
    </GestureHandlerRootView>
  );
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
  },
  link: {
    color: '#61dafb',
  },
  imageContainer: {
    // width: 400,
    // height: 400,
    // borderRadius: 100,
    overflow: 'hidden',
    // margin: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  footerContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: '100%',
    // paddingHorizontal: 20,
    // marginTop: 20,
  },
  footerContainer2: {
    flexDirection: 'row',
  }
})