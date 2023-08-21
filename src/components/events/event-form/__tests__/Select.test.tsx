import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Select from "../Select";
import colors from "../../../../Data/ColorData";
import * as CalendarContext from "../../../../context/CalendarContext";

describe("Select", () => {
  const mockSetEventColor = jest.fn();

 const mockState: Partial<CalendarContext.CalendarState> = {
   eventColor: colors[0].code,
 };

 const mockActions: Partial<CalendarContext.CalendarActions> = {
   setEventColor: mockSetEventColor,
 };

 beforeEach(() => {
   jest.spyOn(CalendarContext, "useCalendarContext").mockImplementation(
     () =>
       ({
         state: mockState,
         actions: mockActions,
       } as any)
   );
 });

  afterEach(() => {
    jest.clearAllMocks();
  });

 it("displays all color options", () => {
   render(<Select />);
   colors.forEach((color) => {
     expect(screen.getByText(color.name)).toBeInTheDocument();
   });
 });

  it("renders the correct options from the colors array", () => {
    render(<Select />);
    colors.forEach((color) => {
      expect(screen.getByText(color.name)).toBeInTheDocument();
    });
  });

it("calls setEventColor with the correct color code when a new color is selected", () => {
  render(<Select />);
  const selectElement = screen.getByDisplayValue(colors[0].name); // 
  fireEvent.change(selectElement, {
    target: { value: colors[1].code },
  });
  expect(mockSetEventColor).toHaveBeenCalledWith(colors[1].code);
});





});
