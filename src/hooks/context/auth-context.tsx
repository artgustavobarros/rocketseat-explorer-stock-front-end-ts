import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api/api";
import { AuthProviderProps, DataProps, DataPropsModel, SignInRequestProps } from "./types";

export const AuthContext = createContext({})

const AuthProvider = ({children}: AuthProviderProps) =>{
  
  const [data, setData] = useState<DataProps>(DataPropsModel)

  const signIn = async({email, password}: SignInRequestProps) =>{
    try{
      const response = await api.post('/sessions', {email, password})
      const {user, token} = response.data

      localStorage.setItem('@estock:user', JSON.stringify(user))
      localStorage.setItem('@estock:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({user, token})
      console.log(user)
      console.log(token)
      
    }catch(err){
      if(err.response){
        alert(err.response.data.message)
      }else{
        alert('Unable to log in')
      }
    }
  }

  const signOut = () =>{
    localStorage.removeItem('@estock:token')
    localStorage.removeItem('@estock:user')
    
    setData(DataPropsModel)
  }

  useEffect(()=>{
    const token = localStorage.getItem('@estock:token')
    const user = localStorage.getItem('@estock:user')

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token, user: JSON.parse(user)
      })
    }
  },[])

  return(
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider