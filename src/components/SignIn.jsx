import { TextInput, View, Pressable, StyleSheet } from "react-native"
import { useFormik } from "formik"

import Text from "./Text"
import theme from "../theme"

const initialValues = {
  username: "",
  password: "",
}

const onSubmit = (values) => {
  console.log(values)
}

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        style={styles.input}
      />
      <TextInput
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
        style={styles.input}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text fontWeight={"bold"} style={styles.buttonText}>
          Submit
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.mainBakground,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  button: {
    padding: 15,
    borderRadius: 4,
    backgroundColor: "blue",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
})

export default SignIn
