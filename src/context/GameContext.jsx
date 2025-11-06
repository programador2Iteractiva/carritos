import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext(undefined);

export function GameProvider({ children }) {
    const [first, setfirst] = useState(null)

    return <GameContext.Provider value={first}>{children}</GameContext.Provider>;
}

// 3. Crear el Hook personalizado
export function useGame() {
    const context = useContext(GameContext);

    if (context === undefined) {
        throw new Error('useGame debe ser usado dentro de un GameProvider');
    }

    return context;
}