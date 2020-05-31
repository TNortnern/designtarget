import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import Vue from "vue";
import VueApollo from "vue-apollo";
const token = localStorage.getItem("token");
Vue.use(VueApollo);

export const apolloClient = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:5000/graphql",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }),
  cache: new InMemoryCache()
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default apolloProvider;
