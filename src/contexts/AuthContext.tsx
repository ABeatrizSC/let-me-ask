import { ReactNode, createContext, useEffect, useState } from "react";
//autenticacao
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../services/firebase'; 

type User = {
    id: string,
    name: string,
    avatar: string;
}
  
type AuthContextType = {
user: User | undefined; //undefined pois há momentos em que o usuário não está logado
signInWithGoogle: () => Promise<void>; //função async retorna uma promise de retorno vazio
}

export const AuthContext = createContext({} as AuthContextType); //contexto de tipo AuthContextType

type AuthContextProviderProps = {
    children: ReactNode;
}

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser ] = useState<User>(); //estado de tipo User

    useEffect( () => {
      const unsubscribe = auth.onAuthStateChanged( user => {
        if (user) { //se há um login já feito na plataforma
          //recupera informações e define-as novamente
          const { displayName, photoURL, uid } = user
  
        if (!displayName || !photoURL) { 
          throw new Error("Missing information from Google Account"); 
        }
  
        setUser({ 
          id: uid,
          name: displayName,
          avatar: photoURL
        })
        }
      })
  
      return () => {
        unsubscribe();
      }
    }, [])
  
    async function signInWithGoogle() {
      const provider = new GoogleAuthProvider();
  
      const result =  await signInWithPopup(auth, provider);
      
      if (result.user) {
        const { displayName, photoURL, uid } = result.user
  
        if (!displayName || !photoURL) { 
          throw new Error("Missing information from Google Account"); 
        }
  
        setUser({ //informações e tipos necessários em user
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    }
  
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}> {/* acesso ao login em todas as páginas */}
            {props.children}
        </AuthContext.Provider>
    );
}