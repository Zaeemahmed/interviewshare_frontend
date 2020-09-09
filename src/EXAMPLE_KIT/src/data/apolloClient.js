import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const link = from([
    onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.map(({ message, extensions, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Code: ${extensions.code}, Location: ${locations}, Path: ${path}`
                )
            );

        if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({ uri: 'http://dev.react-profile.org:8080/v1/graphql' }),
]);

const cache = new InMemoryCache();
// const link = new HttpLink({
//     uri: 'http://dev.react-profile.org:8080/v1/graphql',
//     // headers: {
//     //     authorization: localStorage.getItem('token') || '',
//     // },
// });

const apolloClient = new ApolloClient({ link, cache });

export default apolloClient;
