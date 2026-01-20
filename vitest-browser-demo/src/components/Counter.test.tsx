import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Counter } from "./Counter";

test("Counter should render with initial count", async () => {
  const screen = await render(<Counter initialCount={5} />);

  await expect
    .element(screen.getByTestId("count"))
    .toHaveTextContent("Count: 5");
});

test("Counter should increment when clicking Increment button", async () => {
  const screen = await render(<Counter initialCount={0} />);

  await screen.getByRole("button", { name: "Increment" }).click();

  await expect
    .element(screen.getByTestId("count"))
    .toHaveTextContent("Count: 1");
});

test("Counter should decrement when clicking Decrement button", async () => {
  const screen = await render(<Counter initialCount={10} />);

  await screen.getByRole("button", { name: "Decrement" }).click();

  await expect
    .element(screen.getByTestId("count"))
    .toHaveTextContent("Count: 9");
});

test("Counter should reset to 0 when clicking Reset button", async () => {
  const screen = await render(<Counter initialCount={100} />);

  await screen.getByRole("button", { name: "Reset" }).click();

  await expect
    .element(screen.getByTestId("count"))
    .toHaveTextContent("Count: 0");
});
