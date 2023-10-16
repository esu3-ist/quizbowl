import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: string): string {
    let saved: string = "";
    if (localStorage["roomName"]) {
      saved = JSON.parse(localStorage.getItem("roomName") || "");
    }
    return saved || "Room Name";
}

export const useLocalStorage = (key: string, defaultValue: string) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}