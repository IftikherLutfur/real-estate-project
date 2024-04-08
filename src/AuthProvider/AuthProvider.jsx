import React, { createContext } from 'react';

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {


    const authInfo ={

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;