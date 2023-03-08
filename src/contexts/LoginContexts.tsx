import { createContext } from "react";

type LoginContextProps = {
  children: any;
};

export const LoginContext = createContext({});

export function LoginContextProvider({ children }: LoginContextProps) {
  const nome = "Pareci";

  return (
    <LoginContext.Provider value={{ nome }}>{children}</LoginContext.Provider>
  );
}
