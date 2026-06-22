'use client'

import { useState, useEffect } from "react";
import { CountingNumber } from "@/Components/animate-ui/counting-number";

function formatStat(value: number): { num: number; suffix: string; decimals: number } {
    if (value >= 1e9) return { num: value / 1e9, suffix: "B+", decimals: 1 };
    if (value >= 1e6) return { num: value / 1e6, suffix: "M+", decimals: 1 };
    if (value >= 1e3) return { num: value / 1e3, suffix: "K+", decimals: 1 };
    return { num: value, suffix: "+", decimals: 0 };
}

export default function CurrentUsers() {
    const [data, setData] = useState<null | {
        total_favorited: number,
        total_playing: number,
        total_visits: number
    }>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://www.elevon.gg/api/getstats/1160789089/4661160139/605887098/4202932581/2435789930/2151379579/1720936166/3132040251/3405618667/2150346856/7051852656/4293623433/9600220713/9671940985/6010232141/10118142006/10084046557/10084134895/10047813675/10322783122/10377621012/10377436583");
            const dat = await res.json();
            setData(dat as {
                total_favorited: number,
                total_playing: number,
                total_visits: number
            });
        })()
    }, []);

    const playing = data ? formatStat(data.total_playing) : null;
    const visits = data ? formatStat(data.total_visits) : null;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 select-none max-w-2xl mx-auto">
            {data && playing ? (
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <CountingNumber
                        number={playing.num}
                        suffix={playing.suffix}
                        decimals={playing.decimals}
                        duration={2}
                        className="text-3xl font-bold bg-gradient-to-r from-[#23719e] to-[#184e6e] bg-clip-text text-transparent"
                    />
                    <span className="text-sm text-zinc-400 mt-1">Online Users</span>
                </div>
            ) : (
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center animate-pulse">
                    <span className="text-3xl font-bold text-zinc-600">—</span>
                    <span className="text-sm text-zinc-500 mt-1">Online Users</span>
                </div>
            )}

            {data && visits ? (
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <CountingNumber
                        number={visits.num}
                        suffix={visits.suffix}
                        decimals={visits.decimals}
                        duration={2.5}
                        className="text-3xl font-bold bg-gradient-to-r from-[#23719e] to-[#184e6e] bg-clip-text text-transparent"
                    />
                    <span className="text-sm text-zinc-400 mt-1">Total Unique Sessions</span>
                </div>
            ) : (
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center animate-pulse">
                    <span className="text-3xl font-bold text-zinc-600">—</span>
                    <span className="text-sm text-zinc-500 mt-1">Total Unique Sessions</span>
                </div>
            )}
        </div>
    );
}
