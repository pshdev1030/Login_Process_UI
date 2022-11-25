import { createContext } from "react";

interface InitialAuthState {
  isLogin: boolean;
  setIsLogin: (nextIsLogin: boolean) => void;
}

const AuthContext = createContext<InitialAuthState>({
  isLogin: false,
  setIsLogin: () => {},
});

export default AuthContext;
