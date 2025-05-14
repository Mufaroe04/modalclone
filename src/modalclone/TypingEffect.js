import React, { useState, useEffect } from "react";

const TypingEffect = () => {
    const text = "Why Spotter AI";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true);
    const displayedText = text.substring(0, currentIndex);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeoutId = setTimeout(() => {
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 300);

            return () => clearTimeout(timeoutId);
        }
    }, [currentIndex, text]);

    useEffect(() => {
        if (currentIndex === text.length) {
            const intervalId = setInterval(() => {
                setCursorVisible(prev => !prev);
            }, 500);

            return () => clearInterval(intervalId);
        }
    }, [currentIndex, text]);

    return (
        <div className="Label-module--label--28ddc">
            <span id="dynamic-text">{displayedText}</span>
            <span className={`Label-module--cursor--a2fd2 ${cursorVisible ? 'visible' : 'hidden'}`}>
                _
            </span>
        </div>
    );
};

export default TypingEffect;