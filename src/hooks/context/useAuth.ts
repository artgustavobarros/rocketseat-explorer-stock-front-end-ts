import { useContext } from "react";
import { AuthContext } from "./auth-context";
import { AuthProviderReply } from "./types";

export const useAuth = () => useContext(AuthContext) as AuthProviderReply