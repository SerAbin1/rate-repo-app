import { useQuery } from "@apollo/client"

import { AUTH_STATUS } from "../graphql/queries"

const useAuthStatus = () => {
  const { data } = useQuery(AUTH_STATUS)
  
  if(data?.me == null) return false
  return true
}

export default useAuthStatus
