import { test, expect } from "@playwright/test";

test("フォームが正しく表示される", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "ログイン" })).toBeVisible();
  await expect(page.getByLabel("メールアドレス")).toBeVisible();
  await expect(page.getByLabel("パスワード")).toBeVisible();
  await expect(page.getByRole("button", { name: "ログイン" })).toBeVisible();
});

test("メールアドレス未入力でエラーが表示される", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "ログイン" }).click();

  await expect(page.getByTestId("error-message")).toHaveText(
    "メールアドレスを入力してください",
  );
});

test("パスワード未入力でエラーが表示される", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("メールアドレス").fill("test@example.com");
  await page.getByRole("button", { name: "ログイン" }).click();

  await expect(page.getByTestId("error-message")).toHaveText(
    "パスワードを入力してください",
  );
});

test("正しい入力でログインできる", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("メールアドレス").fill("test@example.com");
  await page.getByLabel("パスワード").fill("password123");
  await page.getByRole("button", { name: "ログイン" }).click();
});
