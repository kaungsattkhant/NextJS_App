import Layout from '../components/Layout'
import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout >
//       <Component {...pageProps} />
//     </Layout>
//   )
// }
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
      <Component {...pageProps} />

      </Layout>
    </ApolloProvider>
  );
}

export default MyApp
