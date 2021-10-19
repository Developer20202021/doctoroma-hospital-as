import React, { createContext } from 'react';
import FirebaseAuthentication from '../Firebase/Firebase';




export const NewAuthContext = createContext();




const AuthContext = ({children}) => {


        const firebaseAction = FirebaseAuthentication();


    return (
        <NewAuthContext.Provider value={firebaseAction}>
                {children}
        </NewAuthContext.Provider>
    );
};

export default AuthContext;