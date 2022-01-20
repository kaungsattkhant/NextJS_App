import { ApolloClient, InMemoryCache ,HttpLink,from} from "@apollo/client";
import {onError} from '@apollo/client/link/error';

const errorLink=onError(({
    graphqlErrors,networkError
})=>{
    if(graphqlErrors){
        graphqlErrors.map(({message,location,path})=>{
            alert(`GraphQl Error ${message}`)
        })
    }
})

const link=from([
    errorLink,
    new HttpLink({
        uri:"http://localhost:6969/graphql"
    }),
])

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default client;