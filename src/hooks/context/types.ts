import { ReactNode } from "react";

export interface AuthProviderProps{
  children: ReactNode
}

export interface DataProps{
  token: string
  user: {
    id: string
    email: string
    password: string
    created_at: string
    updated_at: string
  }
}

export const DataPropsModel = {
  token: '',
  user: {
    id:'',
    email:'',
    password:'',
    created_at:'',
    updated_at:'',
  }
}

export interface SignInRequestProps{
  email: string
  password: string
}

export interface AuthProviderReply{
  data: DataProps
  signIn: ({email, password}: SignInRequestProps) => void
  signOut: () => void
}