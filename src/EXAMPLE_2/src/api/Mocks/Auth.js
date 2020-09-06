import { AUTH_TOKEN } from '@/api/oAuth';

export const setMockedJWTtoken = () => {
    localStorage.setItem(
        AUTH_TOKEN,
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzY29wZXMiOlsiYWRkLXVzZXItdG8tZ3JvdXAiLCJyZW1vdmUtdXNlci1mcm9tLWdyb3VwIl0sImNsaWVudCI6ImNyVlJ3b1phc2NCeEY4Qk5xejRxOGVpeUJ4bDZRVEVJdFRyQTBqZXoiLCJ1c2VyIjo0LCJncm91cHMiOltdLCJ0b2tlbl9pZCI6ImYzOWIxNGUyLTExNDUtNGMxMy05YjkwLTJmNWY5YzYxOTg3MSIsImV4cCI6MTU3MjE4NTkwMSwiaXNzdWVyIjoiRGFzaHBvcnQifQ.HRyycqZF2v4WSJo4E5ZpvQlRWDO5dy7uQE7pNBT-dUhVS8ABLwvgjDvHkgy_UIp1zDBkAFXZONpdtIl-pQYrg0HSaAi2BdsQL1tNit6H3-RNtFlrOb31og2VYIDiDHB4Ev3PED_aK5aMsQ9MflVxfb6Eu2r1pgb7hYGUGiOQ9MAkwhttvW0CWZbDzf-1QCwvxeEUhuuDpKdj1zlv5VX4LjQmtib5laO83ue4MUhQRNqbZmN1Sj5nIs74QbEAFyM9zuY8I8ex9XOoaqvR6GwXzIpLnLikEAWtvZeLKO2io52KkxYGtUhEVKWLafHwa5zfEDoMD8vkCxPMAcT7u_RasiRH66rvcaeIS3aUzJR8WbXhiuSU02zC3A_uhfZSVStYNttXIMxJb_H8d9JjFD8jjPqmAIkX5QgrcEGt3Fen4sNk9ZRZaGmM7IXECOzi82pJvXbKQy663ZFOa9PzYPWSxHZCKTXHxZj60tYkLMCFsuIJRtsqwMw9xkgamtgtIADJqRRfq2bMIOabnztWxAeqKSVL2hhD8uWPWsTORedt9bhT_RUCOwtnx0QswU7FV-QJr71TZ9EswvZXNiiuVLoWK3iT_tJq4VIQyrs1BCgnuaB92J6PojC7dvGHu_t1Cqh0IWiWcScLlSaER31HkhQ3bAXJYD5-eG-pNLel3QHvSaw'
    );
};
