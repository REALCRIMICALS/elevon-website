'use client'

import { useState, useEffect } from "react";
import { MoneyFormat } from "./utils";

export default function CurrentUsers() {
    const [data, setData] = useState<null | {
        total_favorited: number,
        total_playing: number,
        total_visits: number
    }>(null);
    useEffect(() => {
        (async () => {
            const res = await fetch("https://www.elevon.gg/api/getstats/1160789089/4661160139/605887098/4202932581/2435789930/2151379579/1720936166/3132040251/3405618667/2150346856/7051852656/4293623433/9600220713/9405919281");
            const dat = await res.json();
            setData(dat as {
                total_favorited: number,
                total_playing: number,
                total_visits: number
            });
        })()
    }, []);
    return <div className="w-full flex justify-evenly items-center select-none rounded-3xl bg-faint border border-white/6 shadow-xl">
        {data ? <>
            <div className="p-6 flex items-center">
            <h3 className="text-xl font-semibold mb-2 text-center">{parseFloat(MoneyFormat(data.total_playing)).toPrecision(2) + MoneyFormat(data.total_playing).replace(/[^B|M|K]/g, "")}+ Online Users</h3>
        </div>
        <div className="p-6 flex items-center">
            <h3 className="text-xl font-semibold mb-2 text-center">{parseFloat(MoneyFormat(data.total_visits)).toPrecision(2) + MoneyFormat(data.total_visits).replace(/[^B|M|K]/g, "")}+ Total Unique Sessions</h3>
        </div>
        </> : <div className="p-6 flex items-center">
            <h3 className="text-xl font-semibold mb-2 text-center">Loading...</h3>
        </div>}
    </div>
}
