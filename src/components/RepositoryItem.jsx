import { View, Image, StyleSheet } from "react-native"
import Text from "./Text"
import theme from "../theme"

const formatCount = (count) => {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : `${count}`
}

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text fontSize={"heading"} fontWeight={"bold"}>
            {item.fullName}
          </Text>
          <Text fontSize={"body"}>{item.description}</Text>
          <View style={styles.langStyle}>
            <Text>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <View>
          <Text fontWeight={"bold"}>{formatCount(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text fontWeight={"bold"}>{formatCount(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text fontWeight={"bold"}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text fontWeight={"bold"}>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    marginBottom: 15,
  },
  headerText: {
    marginLeft: 15,
    flexShrink: 1,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatar: {
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: 5,
  },
  langStyle: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderRadius: 5,
  },
})

export default RepositoryItem
