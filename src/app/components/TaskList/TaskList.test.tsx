import { fireEvent, render, screen, within } from "@testing-library/react";
import TaskList from "./";

describe("Integration test for ToDo app", () => {
  it("Test the remove task functionality", () => {
    render(<TaskList />);

    const tasksInLists = screen.getAllByRole("listitem");
    expect(tasksInLists.length).toBe(3);
    expect(tasksInLists[0]).toHaveTextContent(/learn next\.js/i);
  });

  test("Test removing the second task works", () => {
    render(<TaskList />);

    let tasksInLists = screen.getAllByRole("listitem");
    expect(tasksInLists.length).toBe(3);
    expect(tasksInLists[1]).toHaveTextContent(/build a to-do app/i);

    const removeButton = within(tasksInLists[1]).getByRole('button');

    // Check before removal
    let removedTask = screen.queryByText(/build a to-do app/i);
    expect(removedTask).toBeInTheDocument();

    // Remove task
    fireEvent.click(removeButton);

    // Check after removal
    tasksInLists = screen.getAllByRole("listitem");
    expect(tasksInLists.length).toBe(2);
    removedTask = screen.queryByText(/build a to-do app/i);
    expect(removedTask).not.toBeInTheDocument();
  });

  it("Test the add task functionality", () => {
    render(<TaskList />);

   
    const mockTask = "Do the dishes"
   

     //intial list
    let tasksInLists = screen.getAllByRole("listitem");
    expect(tasksInLists.length).toBe(3);

    //Enter task
    const userInput = screen.getByLabelText("Add your task:") as HTMLInputElement
    const submitButton = screen.getByRole('button', {name: /add task!/i})

    fireEvent.change(userInput, {target: {value: mockTask}})
    fireEvent.click(submitButton)
    //click "Add task" button
    tasksInLists = screen.getAllByRole("listitem");
    expect(tasksInLists.length).toBe(4);
    expect(tasksInLists[3]).toHaveTextContent(mockTask)
    

     const removeButton = within(tasksInLists[1]).getByRole('button');
     fireEvent.click(removeButton)
    tasksInLists = screen.getAllByRole("listitem");

    expect(tasksInLists.length).toBe(3);

  })
});
