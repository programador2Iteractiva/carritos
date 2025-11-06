import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => { };

    const logout = () => { };

    return <AuthContext.Provider value={
        user
    }>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }

    return context;
}