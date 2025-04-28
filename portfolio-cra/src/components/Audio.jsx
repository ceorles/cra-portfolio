import React, { useEffect, useRef } from 'react';

const LittleRootTown = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.1; 
        }
    }, []);

    useEffect(() => {
        const handleUserInteraction = () => {
            if (audioRef.current) {
                audioRef.current.play();
            }
            window.removeEventListener('click', handleUserInteraction);
        };

        window.addEventListener('click', handleUserInteraction);

        return () => {
            window.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    return (
        <audio ref={audioRef} loop>
            <source src="/LRT.mp3" type="audio/mp3" />
        </audio>
    );
};

export default LittleRootTown;
