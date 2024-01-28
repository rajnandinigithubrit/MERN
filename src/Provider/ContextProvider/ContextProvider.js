import { createContext, useContext, useState } from 'react';

// Create a React context to hold user data
const ContextProvider = createContext();

// Create a provider component that will wrap the entire application
export const UserProvider = ({ children }) => {
    alert(children)
    const [user, setUser] = useState(null);
    const [Url, setUrl] = useState(null);

    // Function to set user data when a user logs in
    const loginUser = (userData) => {
        setUser(userData);
    };

    // Function to clear user data when a user logs out
    const logoutUser = () => {
        setUser(null);
    };

    // Provide the user data and functions to the components
    return (
        <ContextProvider.Provider value={{ user, loginUser, logoutUser,Url }}>
            {children}
        </ContextProvider.Provider>
    );
};

// Custom hook to simplify accessing the context
export const useUser = () => {
    return useContext(ContextProvider);
};
