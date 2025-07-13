import { View, StyleSheet, Pressable } from "react-native"
import Constants from "expo-constants"
import Text from "./Text"
import theme from "../theme"

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: theme.colors.heading,
    flexDirection: "row",
    color: "#ffffff",
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text fontWeight={"bold"} style={styles.container}>
          Repositories
        </Text>
      </Pressable>
    </View>
  )
}

export default AppBar
