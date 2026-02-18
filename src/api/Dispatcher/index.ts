/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatcher } from "flux";
const events: { [key: string]: { [id: string]: (payload: any) => void } } = {};

const dp = new Dispatcher<{ event: string }>();

export function addListener(event: string, callback: (payload: any) => void) {
    const id = dp.register((payload: { event: string }) => {
        if (payload.event === event) callback(payload);
    });
    if (!events[event]) events[event] = {};
    events[event][id] = callback;
}

export function emit(event: string, payload: any) {
    dp.dispatch({
        event,
        ...payload
    });
}

export function removeListener(event: string, callback: (payload: any) => void) {
    if (events[event]) {
        const id = Object.values(events[event]).indexOf(callback);
        if (id > -1) {
            delete events[event][id];
            dp.unregister(Object.keys(events[event])[id]);
        }
    }
}
