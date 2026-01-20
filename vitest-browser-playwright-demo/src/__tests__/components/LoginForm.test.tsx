import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { LoginForm } from "../../components/LoginForm";

test("フォームが正しく表示される", async () => {
  const screen = await render(<LoginForm onSubmit={vi.fn()} />);

  await expect
    .element(screen.getByRole("heading", { name: "ログイン" }))
    .toBeVisible();
  await expect.element(screen.getByLabelText("メールアドレス")).toBeVisible();
  await expect.element(screen.getByLabelText("パスワード")).toBeVisible();
  await expect
    .element(screen.getByRole("button", { name: "ログイン" }))
    .toBeVisible();
});

test("メールアドレス未入力でエラーが表示される", async () => {
  const screen = await render(<LoginForm onSubmit={vi.fn()} />);

  await screen.getByRole("button", { name: "ログイン" }).click();

  await expect
    .element(screen.getByTestId("error-message"))
    .toHaveTextContent("メールアドレスを入力してください");
});

test("パスワード未入力でエラーが表示される", async () => {
  const screen = await render(<LoginForm onSubmit={vi.fn()} />);

  await screen.getByLabelText("メールアドレス").fill("test@example.com");
  await screen.getByRole("button", { name: "ログイン" }).click();

  await expect
    .element(screen.getByTestId("error-message"))
    .toHaveTextContent("パスワードを入力してください");
});

test("正しい入力でonSubmitが呼ばれる", async () => {
  const handleSubmit = vi.fn();
  const screen = await render(<LoginForm onSubmit={handleSubmit} />);

  await screen.getByLabelText("メールアドレス").fill("test@example.com");
  await screen.getByLabelText("パスワード").fill("password123");
  await screen.getByRole("button", { name: "ログイン" }).click();

  expect(handleSubmit).toHaveBeenCalledWith("test@example.com", "password123");
});
