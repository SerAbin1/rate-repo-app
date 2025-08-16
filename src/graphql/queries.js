import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          forksCount
          fullName
          language
          ownerAvatarUrl
          description
          stargazersCount
          reviewCount
          ratingAverage
          id
        }
      }
    }
  }
`

export const AUTHENTICATE = gql`
  mutation Authenticaton($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`
