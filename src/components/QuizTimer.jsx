import { useCallback, useEffect, useState } from 'react';

export default function QuizTimer({timer, onTimerEnd, mode}) {

    const [timeLeft, setTimeLeft] = useState(timer);

    useEffect(() => {
        console.log("Timeeout set");
     const timeout = setTimeout(onTimerEnd, timer);

     return () => clearTimeout(timeout);
    
    }, [timer, onTimerEnd]);

    useEffect(() => {
        console.log("Timer started");
        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 100);
        }, 100);

        return () => clearInterval(interval);
    }   , []);


    return (
        <progress id='question-time' value={timeLeft} max={timer} className={mode} />
    )

}