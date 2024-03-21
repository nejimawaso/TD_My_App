import React, { useState,useEffect } from 'react';

function TimeCheck() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID);
        }

    }, []);

    const tick = () => {
        setCurrentTime(new Date());
    }

    return (
        <div>
            <h3>{currentTime.toLocaleTimeString()}</h3>
        </div>
    )
}

export default TimeCheck;