import { useEffect, useState } from "react";
import LoginProgress from "./components/LoginProgress";
import AuthProvider from "./providers/auth/AuthProvider";

function App() {
  const [step, setStep] = useState<number>(0);

  const handleLogIn = () => {
    console.log("login");
  };

  const handleLogOut = () => {
    console.log("logOut");
  };

  return (
    <AuthProvider>
      <div className="mobileOnly">
        <LoginProgress progress={step} />
      </div>
    </AuthProvider>
  );
}

export default App;
