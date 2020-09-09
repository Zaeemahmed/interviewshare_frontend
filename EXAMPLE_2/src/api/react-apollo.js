import { ApolloClient } from 'apollo-boost';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { AUTH_TOKEN } from './oAuth';
import { typeDefs, resolvers } from './resolvers';
import { cache } from './cache';

const httpEndpoint = 'https://backend.dashport.io/graphql/';

const link = createUploadLink({ uri: httpEndpoint });

// const linkOld = new HttpLink({
//     uri        : httpEndpoint,
//     // credentials: 'same-origin'
// });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const defaultOptions = {
    // You can use `https` for secure connection (recommended in production)
    httpEndpoint,
    // You can use `wss` for secure connection (recommended in production)
    // Use `null` to disable subscriptions
    wsEndpoint: null,
    // LocalStorage token
    tokenName: AUTH_TOKEN,
    // Enable Automatic Query persisting with Apollo Engine
    persisting: false,
    // Use websockets for everything (no HTTP)
    // You need to pass a `wsEndpoint` for this to work
    websocketsOnly: false,
    // Is being rendered on the server?
    ssr: false,

    // Override default apollo link
    // note: don't override httpLink here, specify httpLink options in the
    // httpLinkOptions property of defaultOptions.
    // link: myLink

    // Override default cache
    // cache: myCache

    // Override the way the Authorization header is set
    // getAuth: (tokenName) => ...

    // Additional ApolloClient options
    // apollo: { ... }

    // Client local data (see apollo-link-state)
    // clientState: { resolvers: { ... }, defaults: { ... } }
};

cache.writeData({
    data: {
        editOrderDocument: false,
    },
});

export const apolloClient = new ApolloClient({
    cache,
    link: authLink.concat(link),
    onError: ({ graphQLErrors, operation, forward }) => {
        //from https://blog.apollographql.com/full-stack-error-handling-with-graphql-apollo-5c12da407210
        if (graphQLErrors) {
            for (let err of graphQLErrors) {
                // handle errors differently based on its error code
                switch (err.extensions.code) {
                    case 'UNAUTHENTICATED':
                        // old token has expired throwing AuthenticationError,
                        // one way to handle is to obtain a new token and
                        // add it to the operation context

                        // const headers = operation.getContext().headers;
                        // operation.setContext({
                        //   headers: {
                        //     ...headers,
                        //     authorization: getNewToken(),
                        //   },
                        // });

                        // Now, pass the modified operation to the next link
                        // in the chain. This effectively intercepts the old
                        // failed request, and retries it with a new token
                        return forward(operation);
                    // handle other errors
                    case 'ANOTHER_ERROR_CODE':
                        // ...
                        break;
                    default:
                        break;
                }
            }
        }
    },
    typeDefs,
    resolvers,
    ...defaultOptions,
});
