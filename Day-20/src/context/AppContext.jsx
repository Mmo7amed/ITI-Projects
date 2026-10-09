import react, { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export default function AppProvider({children}) {
    let [counter,setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1)
    }

    return (
        <>
        <AppContext.Provider value={{counter, increment}}>
            {children}
        </AppContext.Provider>
        </>
    )
}