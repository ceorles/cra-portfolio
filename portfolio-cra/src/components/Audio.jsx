import React, { useEffect, useRef } from 'react';

const LittleRootTown = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2;
        }
    }, []);

    return (
        <audio ref={audioRef} autoPlay loop>
            <source src="/LRT.mp3" type="audio/mp3" />
        </audio>
    );
};

export default LittleRootTown;
