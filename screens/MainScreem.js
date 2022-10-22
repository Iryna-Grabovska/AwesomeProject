import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { gStyle } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";

export default function MainScreem({ navigation }) {
  const [modalWindow, setModalWindow] = useState(false);

  const [news, setnews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool!",
      key: "1",
      img: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool!",
      key: "2",
      img: "https://www.freepnglogos.com/images/png-apple-logo-9711.html",
    },
    {
      name: "FaceBook",
      anons: "FaceBook!!!",
      full: "FaceBook is cool!",
      key: "3",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Ffacebook-logo&psig=AOvVaw1R4m-qalLAMjdc6OQZSfsF&ust=1666517073361000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJiKq4PC8_oCFQAAAAAdAAAAABAK",
    },
  ]);

  const addArticle = (article) => {
    setnews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalWindow(false);
  };

  return (
    <View>
      <Modal visible={modalWindow}>
        <Ionicons
          name="close-circle"
          size={27}
          style={styles.addIcon}
          color="blue"
          onPress={() => setModalWindow(false)}
        />
        <View>
          <Text style={[gStyle.title, styles.header]}>
            Form for adding anons
          </Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle-sharp"
        size={27}
        style={styles.addIcon}
        color="blue"
        onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyle.title, styles.header]}>MainScreem</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfoScreen", item)}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  addIcon: {
    textAlign: "center",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontSize: 18,
    fontWeight: "light",
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
});
