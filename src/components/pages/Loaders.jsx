// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../Loadingscreen';

function Loaders() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    } else {
        return null; // Return null or an empty JSX element when isLoading is false
    }
}

export default Loaders;
