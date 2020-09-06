import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const apolloClient = new ApolloClient({
    link: createUploadLink({ uri: 'http://localhost:4000/' }),
    cache: new InMemoryCache(),
});

export default apolloClient;
