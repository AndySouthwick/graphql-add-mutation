import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj44m4zcf1zpr0151hx0n378x'
})

const client = new ApolloClient({
  networkInterface
})

export default client
