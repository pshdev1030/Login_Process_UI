import { useEffect, useRef, useState } from "react";
import LoginProgress from "./components/LoginProgress";
import AuthProvider from "./providers/auth/AuthProvider";
import api from "./service";
import wait from "./utils/wait";

function App() {
  const [step, setStep] = useState<number>(0);
  const token1 = useRef("");
  const token2 = useRef("");

  useEffect(() => {
    if (step === 0) {
      const getToken1 = async () => {
        const data = await api.auth.getToken1("sunghyeon");
        token1.current = data.token;
        setStep(1);
      };
      getToken1();
    }
    if (step === 1) {
      const getToken2 = async () => {
        const data = await api.auth.getToken2(token1.current);
        token2.current = data.token;
        setStep(3);
      };
      const setFallbackUI = async () => {
        await wait(3000);
        setStep(2);
      };
      getToken2();
      setFallbackUI();
    }
  }, [step]);

  return (
    <AuthProvider>
      <div className="mobileOnly">
        <LoginProgress progress={step} />
      </div>
    </AuthProvider>
  );
}

export default App;
