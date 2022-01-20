import Layout from '../components/Layout'
import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
// import {QueryClientProvider, QueryClient} from 'react-query';
// const queryClient=new QueryClient();

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
      {/* <QueryClientProvider client={queryClient}> */}
      <Layout>
      <Component {...pageProps} />

      </Layout>
      {/* </QueryClientProvider> */}
     
     </ApolloProvider>
    
  );
}

export default MyApp
