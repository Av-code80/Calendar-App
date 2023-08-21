# Splio Front-end Interview Test

Welcome to the Splio Front-end interview test. Your task is to create a single month calendar application using React.

## Task Description

- **Environment**: You have the flexibility to choose your development environment.
  - Use [codesandbox.io](https://codesandbox.io/)
  - Create a repository on [GitHub](https://github.com/)
  - Send your project as zip files

- **Features**:
  1. **Display Calendar**:
     - Display the month of January.
     - The first day of January should be Sunday.
     - Consider using the `<table>` tag to structure your calendar.

  2. **Event Management**:
     - Clicking on a day should present a form to create an event.
     - Each day can only have one event.
     - If a day does not have an event, the creation form should appear upon selection.
     - If a day already has an event, an overview of the event should be displayed.

  3. **Event Creation**:
     - Events must have a name (This is mandatory).
     - Events without names should not be added.
     - (Optional) Allow associating a color with the event.

       ```javascript
       export const colors = [
         {
           code: '#FF5252',
           name: 'red'
         },
         {
           code: '#E040FB',
           name: 'purple'
         },
         {
           code: '#FF6E40',
           name: 'orange'
         },
         {
           code: '#CDDC39',
           name: 'lime'
         },
         {
           code: '#0097A7',
           name: 'cyan'
         }
       ];
       ```

  4. **Delete an Event**:
     - Events can be deleted by clicking on a delete button.

- **Styling**:
  - Styling is optional. Feel free to skip it or keep it minimalistic.

## Acceptance Tests

1. **General User Interactions**:
   - See the month of January (Starting with Sunday and ending with Tuesday).
   - Select a day.
   - Add an event if no event exists for that day.
   - View an event if one exists for the day.
   - Delete an existing event.

2. **Event Creation**:
   - An event can't be added without a name.
   - Events are added by clicking a submit button.
   - Users should be able to close the event form with a button.
   - (Optional) Allow users to select a color for their event.

## Testing

Ensure the code quality by covering the event creation form with a Jest test.

Good luck!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
