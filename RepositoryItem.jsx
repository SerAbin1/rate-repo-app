import { View, Text, Image } from "react-native"

const formatCount = (count) => {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : `${count}`
}

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {formatCount(item.stargazersCount)}</Text>
      <Text>Forks: {formatCount(item.forksCount)}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  )
}

export default RepositoryItem
