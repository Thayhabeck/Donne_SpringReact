import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const recoveredUser = localStorage.getItem("user");

      if(recoveredUser){
          setUser(JSON.parse(recoveredUser));
      }
      setLoading(false);
    
    }, [])


    const login = (email, password) => {
        console.log('login auth', { email, password } );

        
        const loggedUser = {id: "123", email: email, nome: String((email === "thayna@donne.com")? "Thayná" : (email === "rodrigo@donne.com")? "Rodrigo" : "Vitor")};

        localStorage.setItem("user", JSON.stringify(loggedUser));
        
        if ((email === "thayna@donne.com" || email === "rodrigo@donne.com" || email === "vitor@donne.com") && password === "@dmin") {
            setUser(loggedUser);
            navigate("/");
        }
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };
    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

};