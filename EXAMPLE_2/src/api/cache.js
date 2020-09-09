import { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-boost';
import introspectionQueryResultData from './fragmentTypes.json';
const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
});

export const cache = new InMemoryCache({ fragmentMatcher });
