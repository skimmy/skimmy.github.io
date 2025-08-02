"use client";

import { useEffect, useRef, useState } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
    subsets: ['latin'],
})

const BUTTON_CLASS = "mx-2 px-2 py-1 rounded-xl bg-blue-500 text-white hover:bg-blue-600";

type StopwatchProps = {
    legend?: string,
    className?: string,
    controls?: boolean,
    onElapsedChange?: (elapsed: number) => void;
};

export default function Stopwatch({
    legend = "Elapsed",
    className = "text-center",
    controls = false,
    onElapsedChange = () => { }
}: StopwatchProps) {
    const [timer, setTimer] = useState({
        elapsed: 0,
        running: true,
        start: Date.now()
    });
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!timer.running) return;
        intervalRef.current = setInterval(() => {
            const elapsed = Date.now() - timer.start;
            setTimer({ ...timer, elapsed: elapsed });
            onElapsedChange(elapsed);
        }, 250);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [timer, onElapsedChange]);

    return (
        <div className={`${className}`}>
            {legend ? <h1 className="text-2xl font-semibold mb-2">{legend}</h1> : ""}

            <p suppressHydrationWarning={true} className={`text-2xl tracking-wide ${orbitron.className}`} >
                {formatTime((timer.elapsed / 1000))}
            </p>
            <p className="">
                {controls ? <button className={BUTTON_CLASS} onClick={() => {
                    if (timer.running) {
                        setTimer({ ...timer, running: false });
                    } else {
                        setTimer({
                            elapsed: 0,
                            running: true,
                            start: Date.now()
                        })
                    }
                }}>{timer.running ? "Stop" : "Start"}</button> : ""}

            </p>
        </div>
    );

}

function formatTime(seconds: number): string {
    const hrs = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0");
    const mins = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
    const secs = (seconds % 60).toFixed(0).toString().padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
}
