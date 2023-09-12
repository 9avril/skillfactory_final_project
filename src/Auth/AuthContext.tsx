import React, {createContext, useContext, useState} from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        return !!localStorage.getItem('isLoggedIn');
    });

    const login = () => {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
    };
    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        console.log("After logout:", localStorage.getItem('isLoggedIn'));
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
