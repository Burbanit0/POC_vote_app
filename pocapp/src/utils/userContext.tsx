import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

import { IUser } from "../types/user.type";
import AuthService from "./../services/auth.service";
import EventBus from "./../common/EventBus";

const myUser = {
    currentUser: undefined,
    logOut: () => {},
}

const UserContext = createContext<{ currentUser: IUser | undefined; logOut: () => void}>(myUser);

interface Props {
    children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

    const logOut = useCallback(() => {
        setCurrentUser(undefined);
        AuthService.logout();  
    }, []);
    
    useEffect(() =>{
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        };
    
        EventBus.on("logout", logOut);
    }, [logOut])
      
    useEffect(()=> {
        return(
            EventBus.remove("logout", logOut)
        ) 
    },[logOut])
    
    return (
        <UserContext.Provider value= {{ currentUser, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);