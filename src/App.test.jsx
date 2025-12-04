import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders el componente de App", () => {
  render(<App />);
  const tituloElemento = screen.getByRole("heading", {
    name: /Vite \+ React/i,
  });
  expect(tituloElemento).toBeInTheDocument();
});
