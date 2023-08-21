import { render, RenderOptions } from "@testing-library/react";
import { CalendarProvider } from "../context/CalendarContext";

const renderWithContext = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: CalendarProvider, ...options });

export * from "@testing-library/react";
export { renderWithContext as render };
