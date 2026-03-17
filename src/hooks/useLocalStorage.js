import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [value, setValue] = useState(() => {
        try{
            const value = localStorage.getItem(key);
            return value || initialValue;
         } catch(error) {
            return initialValue
         }
    })
    useEffect(() => {
        localStorage.setItem(key, value)
    }, [key, value]);
    return ([value, setValue])
}