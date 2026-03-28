import { Image } from "expo-image";
import { useRouter } from "expo-router";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/bg.png")}
        style={{ width: 200, aspectRatio: 1, marginTop: 100 }}
      />
      <Text style={styles.title}>Fast QR Scanner</Text>
      <View style={styles.bottomCard}>
        <Text style={styles.subtitle}>
          Powerful QR scanning with speed, accuracy, and simplicity in one app
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get started</Text>
          <View style={styles.buttonCircle}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0014 11.9966L4 11.9966M14.0054 6L20.0014 11.9998L14.0054 18"
                stroke="#FFFFFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gainsboro",
    width: "100%",
    height: "40%",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "regular",
    color: "#535353",
  },
  title: {
    fontSize: 35,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    height: "100%",
    backgroundColor: "#FDB623",
  },
  button: {
    width: "auto",
    borderRadius: 32,
    backgroundColor: "#f5f5f5",
    paddingVertical: 20,
    position: "relative",
    alignItems: "center",
    paddingHorizontal: 100,
  },
  buttonText: {
    fontSize: 20,
  },
  buttonCircle: {
    borderRadius: "50%",
    flex: 1,
    justifyContent: "center",
    height: "100%",
    aspectRatio: 1,
    backgroundColor: "#FDB623",
    right: 0,
    bottom: 0,
    position: "absolute",
  },
});
