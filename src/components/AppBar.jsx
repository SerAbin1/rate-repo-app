import { View, StyleSheet, Pressable } from "react-native"
import Constants from "expo-constants"
import Text from "./Text"
import theme from "../theme"

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    backgroundColor: theme.colors.heading,
    flexDirection: "row",
  },
  text: {
    color: '#ffffff'
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text fontWeight={"bold"} style={styles.text}>
          Repositories
        </Text>
      </Pressable>
    </View>
  )
}

export default AppBar
