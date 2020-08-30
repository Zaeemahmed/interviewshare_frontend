import React from 'react';

export default function Loading({ loading, error, msg }) {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Error! {msg ? msg : error.message}</div>;
    }
    return null;
}
