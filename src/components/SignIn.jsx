import { TextInput, View, Pressable, StyleSheet, Platform } from "react-native"
import { useFormik } from "formik"
import * as yup from "yup"

import Text from "./Text"
import theme from "../theme"
import useSignIn from "../hooks/useSignIn"
import AuthStorage from "../utils/authStorage"

const authStorage = new AuthStorage("tokenStore")

const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
})

const initialValues = {
  username: "",
  password: "",
}

const SignIn = () => {
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      console.log(data)
      authStorage.setAccessToken(data.authenticate.accessToken)
    } catch (e) {
      console.log(e)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
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
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: theme.colors.errRed }}>
          {formik.errors.username}
        </Text>
      )}
      <TextInput
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
        style={styles.input}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.errRed }}>
          {formik.errors.password}
        </Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text fontWeight={"bold"} style={{ color: "white" }}>
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
})

export default SignIn
