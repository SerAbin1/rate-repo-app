import { View, StyleSheet, Pressable } from "react-native"
import Constants from "expo-constants"
import Text from "./Text"
import theme from "../theme"
import { Link } from "react-router-native"
import { ScrollView } from "react-native"

import useAuthStorage from "../hooks/useAuthStorage"
import useAuthStatus from "../hooks/useAuthStatus"
import { useApolloClient } from "@apollo/client"

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
  const authStatus = useAuthStatus()
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const handleSignout = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Link to="/">
          <Text fontWeight={"bold"} style={styles.container}>
            Repositories
          </Text>
        </Link>
        {authStatus ? (
          <Pressable onPress={handleSignout}>
            <Text fontWeight={"bold"} style={styles.container}>
              Sign Out
            </Text>
          </Pressable>
        ) : (
          <Link to="/sign-in">
            <Text fontWeight={"bold"} style={styles.container}>
              Sign In
            </Text>
          </Link>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
