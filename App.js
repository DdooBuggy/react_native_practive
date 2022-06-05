import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.current}>
          <Text style={styles.cityName}>city</Text>
          <Text style={styles.curTemp}>27°</Text>
          <Text style={styles.curMain}>cur weather</Text>
          <Text style={styles.curTempMinMax}>Max 30° Min 20°</Text>
        </View>

        <View style={{ marginTop: 40, width: SCREEN_WIDTH, padding: 20 }}>
          <View style={styles.weeks}>
            <View style={styles.day}>
              <Text style={styles.time}>Today</Text>
              <View style={styles.dayInfo}>
                <Text style={styles.temp}>25°</Text>
                <View style={styles.icon}>
                  <Fontisto name="cloudy" size={20} color="white" />
                </View>
                <Text style={styles.description}>description</Text>
              </View>
            </View>
            <View style={styles.day}>
              <Text style={styles.time}>Fri</Text>
              <View style={styles.dayInfo}>
                <Text style={styles.temp}>25°</Text>
                <View style={styles.icon}>
                  <Fontisto name="cloudy" size={20} color="white" />
                </View>
                <Text style={styles.description}>description</Text>
              </View>
            </View>
            <View style={styles.day}>
              <Text style={styles.time}>Fri</Text>
              <View style={styles.dayInfo}>
                <Text style={styles.temp}>25°</Text>
                <View style={styles.icon}>
                  <Fontisto name="cloudy" size={20} color="white" />
                </View>
                <Text style={styles.description}>description</Text>
              </View>
            </View>
            <View style={styles.day}>
              <Text style={styles.time}>Fri</Text>
              <View style={styles.dayInfo}>
                <Text style={styles.temp}>25°</Text>
                <View style={styles.icon}>
                  <Fontisto name="cloudy" size={20} color="white" />
                </View>
                <Text style={styles.description}>description</Text>
              </View>
            </View>
            <View style={styles.day}>
              <Text style={styles.time}>Fri</Text>
              <View style={styles.dayInfo}>
                <Text style={styles.temp}>25°</Text>
                <View style={styles.icon}>
                  <Fontisto name="cloudy" size={20} color="white" />
                </View>
                <Text style={styles.description}>description</Text>
              </View>
            </View>
            <View style={styles.day}>
              <Text style={styles.time}>Fri</Text>
              <View style={styles.dayInfo}>
                <Text style={styles.temp}>25°</Text>
                <View style={styles.icon}>
                  <Fontisto name="cloudy" size={20} color="white" />
                </View>
                <Text style={styles.description}>description</Text>
              </View>
            </View>
            <View style={styles.day}>
              <Text style={styles.time}>Fri</Text>
              <View style={styles.dayInfo}>
                <Text style={styles.temp}>25°</Text>
                <View style={styles.icon}>
                  <Fontisto name="cloudy" size={20} color="white" />
                </View>
                <Text style={styles.description}>description</Text>
              </View>
            </View>
            <View style={styles.day}>
              <Text style={styles.time}>Fri</Text>
              <View style={styles.dayInfo}>
                <Text style={styles.temp}>25°</Text>
                <View style={styles.icon}>
                  <Fontisto name="cloudy" size={20} color="white" />
                </View>
                <Text style={styles.description}>description</Text>
              </View>
            </View>
            <View style={styles.day}>
              <Text style={styles.time}>Fri</Text>
              <View style={styles.dayInfo}>
                <Text style={styles.temp}>25.0°</Text>
                <View style={styles.icon}>
                  <Fontisto name="cloudy" size={20} color="white" />
                </View>
                <Text style={styles.description}>dddddd</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1c40f",
  },
  mainContainer: {
    alignItems: "center",
  },
  current: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 45,
    fontWeight: "300",
    color: "white",
  },
  curTemp: {
    fontSize: 100,
    fontWeight: "400",
    color: "white",
  },
  curMain: {
    fontSize: 20,
    fontWeight: "200",
    color: "white",
  },
  curTempMinMax: {
    fontSize: 20,
    fontWeight: "200",
    color: "white",
  },
  weeks: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  day: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  time: {
    fontSize: 25,
    color: "white",
    flex: 1,
  },
  dayInfo: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  temp: {
    fontSize: 20,
    color: "white",
    flex: 1.2,
    textAlign: "center",
  },
  icon: {
    flex: 1,
  },
  description: {
    fontSize: 20,
    color: "white",
    flex: 2,
    textAlign: "end",
  },
});
