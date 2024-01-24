// components/AudioPlayer.js
import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ src, playing, onFinished }) => {
    const audioRef = useRef(null);

    const handlePlay = () => audioRef.current.play();

    const handlePause = () => audioRef.current.pause();

    useEffect(() => {
        if (playing) {
            handlePlay();
        } else {
            handlePause();
        }
    }, [playing]);

    return (
        <audio ref={audioRef} src={src} onEnded={onFinished} />
    );
};

export default AudioPlayer;
