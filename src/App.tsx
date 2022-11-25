import AuthProvider from "./Providers/auth/AuthProvider";

function App() {
  const handleLogIn = () => {
    console.log("login");
  };

  const handleLogOut = () => {
    console.log("logOut");
  };

  return (
    <AuthProvider handleLogIn={handleLogIn} handleLogOut={handleLogOut}>
      <div className="App"></div>;
    </AuthProvider>
  );
}

export default App;
