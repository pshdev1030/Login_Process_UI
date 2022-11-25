import { useContext } from "react";
import AuthContext from "./AuthContext";

const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      "useAuth는 AuthProvider 하위 컴포넌트에서 호출되어야합니다."
    );
  }

  return authContext;
};

export default useAuth;
