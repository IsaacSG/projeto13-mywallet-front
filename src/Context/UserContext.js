import { createContext, useState } from "react";

const userContext = createContext();

export function UserProv ({children}) {
    
    const [user, setUser] = useState({});

    return (
        <userContext.Provider value = {{user, setUser}}>
            {childre}
        </userContext.Provider>
    );
}

export default userContext