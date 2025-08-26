import { createContext,useState,useEffect, Children } from "react";

export const AuthContext=createContext();

export function AuthProvider ({children}){
    const [accessToken,setAccessToken] = useState(null)
    const [fullName,setFullname] = useState("")
    const [email,setEmail] = useState("")

    const login = (token,{fullname,email}) =>{
        
        setAccessToken(token);
        setFullname(fullname)
        setEmail(email)
        
        localStorage.setItem('accessToken',token)
        localStorage.setItem('fullName',fullname)
        localStorage.setItem('email',email)
        
    }

    const logout = ()=>{
        setAccessToken(null);
        setFullname(null)
        setEmail(null)
        localStorage.removeItem('accessToken')
        localStorage.removeItem('fullName')
        localStorage.removeItem('email')
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token && token !== "undefined" && token !== "null") {
            setAccessToken(token);
        }

    }, []);

    return(
        <AuthContext.Provider value={{accessToken,fullName,email,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}