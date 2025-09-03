import { createContext,useState,useEffect, Children } from "react";

export const AuthContext=createContext();

export function AuthProvider ({children}){
    const [accessToken,setAccessToken] = useState(null)
    const [fullName,setFullname] = useState("")
    const [email,setEmail] = useState("")
    const [role,setRole] = useState("")

    const login = (token,{fullname,email,role}) =>{
        
        setAccessToken(token);
        setFullname(fullname)
        setEmail(email)
        setRole(role)
        localStorage.setItem('accessToken',token)
        localStorage.setItem('fullName',fullname)
        localStorage.setItem('email',email)
        localStorage.setItem('role',role)
        
    }

    const logout = ()=>{
        setAccessToken(null);
        setFullname(null)
        setEmail(null)
        localStorage.removeItem('accessToken')
        localStorage.removeItem('fullName')
        localStorage.removeItem('email')
        localStorage.removeItem('role')
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token && token !== "undefined" && token !== "null") {
            setAccessToken(token);
        }

    }, []);

    return(
        <AuthContext.Provider value={{accessToken,fullName,email,role,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}