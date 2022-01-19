import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {navigateToSearch} from "../../helper/routeHelper";
import Header from "../Header";

jest.mock('../../helper/routeHelper')

jest.mock("react-router-dom", () => {
  return {
    useHistory: jest.fn(),
    useSearchParams: jest.fn(() => [{}]),
    useParams: jest.fn(() => ({
      searchQuery: ""
    }))
  }
})

it("header search test", () => {
  const {asFragment} = render(<Header/>)
  expect(asFragment()).toMatchSnapshot()

  fireEvent.change(screen.getByPlaceholderText('What do you want to watch?'), {
    target: {value: 'name'}
  })

  expect(screen.getByDisplayValue('name')).toBeInTheDocument
  fireEvent.click(screen.getByTitle('search'))
  expect(navigateToSearch).toHaveBeenCalled()
})
