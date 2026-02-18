import { Dispatcher } from "../";

export function showNotification(msg: string, type = 0, actions?: React.ReactNode) {
    Dispatcher.emit("OPEN_NOTIFICATION", { msg, actions, type });
}

export function closeNotification(id?: string) {
    Dispatcher.emit("CLOSE_NOTIFICATION", { id });
}
