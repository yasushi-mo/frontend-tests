import { LoginForm } from "./components/LoginForm";

function App() {
  const handleLogin = (email: string, password: string) => {
    console.log("ログイン:", email, password);
    // 実際のアプリケーションではここで認証処理を行う
  };

  return <LoginForm onSubmit={handleLogin} />;
}

export default App;
