import {fireEvent, render, screen} from '@testing-library/react'
import NewTask from './'


test("the user inputis saved", () => {
    render(<NewTask addTask={() => {}}/>)

    const mockTask = "Do the dishes"
    const userInput = screen.getByLabelText("Add your task:") as HTMLInputElement

    expect(userInput).toBeInTheDocument()
    expect(userInput.value).toBe("")

    fireEvent.change(userInput, {target: {value: mockTask}})

    expect(userInput).toBeInTheDocument()
    expect(userInput.value).toBe(mockTask)
})