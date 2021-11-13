import React from 'react';
import { createContext } from 'react/cjs/react.development';
import useFirebae from '../../hooks/useFirebase';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const allContexts = useFirebae();
    return (
        <AuthContext.Provider value = {allContexts}>
            {children}
        </AuthContext.Provider>
            
       
    );
};

export default AuthProvider;