import { useState } from "react";

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("メールアドレスを入力してください");
      return;
    }
    if (!password) {
      setError("パスワードを入力してください");
      return;
    }

    setError("");
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>ログイン</h2>
      {error && (
        <p data-testid="error-message" role="alert">
          {error}
        </p>
      )}
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
        />
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
        />
      </div>
      <button type="submit">ログイン</button>
    </form>
  );
}
