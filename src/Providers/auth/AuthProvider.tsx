import { useEffect, useMemo, useState } from "react";
import usePrev from "../../hooks/usePrev";
import AuthContext from "./AuthContext";

interface AuthProviderProps {
  initialAuthenticated?: boolean;
  handleLogIn?: () => void;
  handleLogOut?: () => void;
  children: React.ReactNode;
}

const AuthProvider = ({
  initialAuthenticated = false,
  handleLogIn,
  handleLogOut,
  children,
}: AuthProviderProps) => {
  const [isLogin, setIsLogin] = useState(initialAuthenticated);
  const previousIsLogin = usePrev(isLogin);

  useEffect(() => {
    // 로그인 되었을 경우 (isLogin을 true로 바꾸어 주었을 경우)
    if (!previousIsLogin && isLogin) {
      handleLogIn && handleLogIn();
      return;
    }
    // 로그아웃 되었을 경우 (isLogin을 false로 바꾸어 주었을 경우)
    if (previousIsLogin && !isLogin) {
      handleLogOut && handleLogOut();
      return;
    }
  }, [previousIsLogin, handleLogIn, handleLogOut]);

  const value = useMemo(
    () => ({
      isLogin,
      setIsLogin,
    }),
    [isLogin]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
