import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EventForm from "../EventForm";
import * as CalendarContext from "../../../../context/CalendarContext";

describe("EventForm", () => {
  let mockSetEventName: jest.Mock<any, any, any>;
  let mockSetIsModalOpen: jest.Mock<any, any, any>;
  let mockHandleEventSubmit: jest.Mock<any, any, any>;

  beforeEach(() => {
    mockSetEventName = jest.fn();
    mockSetIsModalOpen = jest.fn();
    mockHandleEventSubmit = jest.fn();

    jest.spyOn(CalendarContext, "useCalendarContext").mockImplementation(
      () =>
        ({
          state: {
            eventName: "",
          },
          actions: {
            setEventName: mockSetEventName,
            setIsModalOpen: mockSetIsModalOpen,
            handleEventSubmit: mockHandleEventSubmit,
          },
        } as any)
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    render(<EventForm />);
    expect(screen.getByPlaceholderText("Enter Event Name")).toBeInTheDocument();
    expect(screen.getByText("Create Event")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("updates the event name when typing", () => {
    render(<EventForm />);
    fireEvent.change(screen.getByPlaceholderText("Enter Event Name"), {
      target: { value: "Meeting" },
    });
    expect(mockSetEventName).toHaveBeenCalledWith("Meeting");
  });

  it("disables Create Event button for event names under 3 characters", () => {
    render(<EventForm />);
    const createEventButton = screen.getByText("Create Event");
    expect(createEventButton).toBeDisabled();
    fireEvent.change(screen.getByPlaceholderText("Enter Event Name"), {
      target: { value: "Hi" },
    });
    expect(createEventButton).toBeDisabled();
  });

  it("enables Create Event button when event name is 3 or more characters", () => {
    render(<EventForm />);
    const createEventButton = screen.getByText("Create Event");
    fireEvent.change(screen.getByPlaceholderText("Enter Event Name"), {
      target: { value: "Party" },
    });
    expect(createEventButton).not.toBeEnabled();
  });

  it("calls setIsModalOpen with false when Close button is clicked", () => {
    render(<EventForm />);
    fireEvent.click(screen.getByText("Close"));
    expect(mockSetIsModalOpen).toHaveBeenCalledWith(false);
  });

  it("calls handleEventSubmit when the form is submitted", () => {
    render(<EventForm />);
    fireEvent.change(screen.getByPlaceholderText("Enter Event Name"), {
      target: { value: "Party" },
    });
    fireEvent.submit(screen.getByText("Create Event"));
    expect(mockHandleEventSubmit).toHaveBeenCalled();
  });


});
