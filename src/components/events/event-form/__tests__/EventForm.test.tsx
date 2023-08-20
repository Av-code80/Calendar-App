import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EventForm from "../EventForm";
import colors from "./../../../../Data/ColorData";
import userEvent from "@testing-library/user-event";

describe("EventForm", () => {
 const defaultProps = {
   eventName: "",
   eventColor: "",
   colors: [
     {
       code: "#FF5252",
       name: "red",
     },
     {
       code: "#E040FB",
       name: "purple",
     },
     {
       code: "#FF6E40",
       name: "orange",
     },
     {
       code: "#CDDC39",
       name: "lime",
     },
     {
       code: "#0097A7",
       name: "cyan",
     },
   ],
   setEventName: jest.fn(),
   setEventColor: jest.fn(),
   handleEventSubmit: jest.fn(),
   setIsModalOpen: jest.fn(),
 };

  it("renders without crashing", () => {
    const { container } = render(<EventForm {...defaultProps} />);
    expect(container).toBeInTheDocument();
  });

  it("displays color options correctly", () => {
    const { getByLabelText } = render(<EventForm {...defaultProps} />);
    const select = getByLabelText("Event Color:") as HTMLSelectElement;

    colors.forEach((color) => {
      expect(select).toHaveTextContent(color.name);
    });
  });

  it("calls setEventName on input change", () => {
    const { getByPlaceholderText } = render(<EventForm {...defaultProps} />);
    const input = getByPlaceholderText("Enter Event name");

    fireEvent.change(input, { target: { value: "Sample Event" } });
    expect(defaultProps.setEventName).toHaveBeenCalledWith("Sample Event");
  });

  it("calls setEventColor on select change", () => {
    const { getByLabelText } = render(<EventForm {...defaultProps} />);
    const select = getByLabelText("Event Color:") as HTMLSelectElement;

    fireEvent.change(select, { target: { value: colors[1].code } });
    expect(defaultProps.setEventColor).toHaveBeenCalledWith(colors[1].code);
  });

  it("disables submit button when eventName is less than 3 characters", () => {
    const props = { ...defaultProps, eventName: "Hi" };
    const { getByText } = render(<EventForm {...props} />);
    const button = getByText("Create Event");

    expect(button).toBeDisabled();
  });

   test("renders select options correctly", () => {
     const { getByRole } = render(<EventForm {...defaultProps} />);
     const selectElement = getByRole("combobox");
     expect(selectElement).toBeInTheDocument();

     defaultProps.colors.forEach((color) => {
       const optionElement = getByRole("option", { name: color.name });
       expect(optionElement).toBeInTheDocument();
     });
   });

   test("calls setEventColor when a color is selected", () => {
     const { getByRole } = render(<EventForm {...defaultProps} />);
     const selectElement = getByRole("combobox");
     userEvent.selectOptions(selectElement, ["#E040FB"]);
     expect(defaultProps.setEventColor).toHaveBeenCalledWith("#E040FB");
   });
});
